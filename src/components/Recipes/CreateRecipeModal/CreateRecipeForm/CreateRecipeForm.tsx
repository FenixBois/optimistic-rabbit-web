import { FormProvider, useForm } from 'react-hook-form';
import { Button, Input, Select, SelectItem, Typography } from 'components/UI';
import { zodResolver } from '@hookform/resolvers/zod';

import uniqid from 'uniqid';

import type { CreateRecipeFormValues } from './types';
import { TagsData } from './types';
import { Form, InfoBox, TagsBox, TagsWrapper } from './CreateRecipeForm.styles';
import { NewIngredientGroup } from '../NewIngredientGroup';
import { fetcher } from 'utils';
import { api } from 'config';
import useSWR from 'swr';
import * as z from 'zod';

export function CreateRecipeForm() {
    const { data: recipes, mutate } = useSWR(`${api}/recipes`, fetcher);
    const schema = z.object({
        name: z.string().min(1, { message: 'Required' }),
    });

    const methods = useForm<CreateRecipeFormValues>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: {
            ingredients: [
                {
                    unit: undefined,
                    name: undefined,
                    amount: 'g',
                },
            ],
        },
    });
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = methods;

    const onSubmit = async (recipe: CreateRecipeFormValues) => {
        const newRecipe = {
            ...recipe,
            media: recipe.media.toUpperCase(),
            difficulty: recipe.difficulty.toUpperCase(),
            taste: recipe.taste.toUpperCase(),
            servings: 2,
            vegetarian: false,
            reference: 'asd',
        };

        const createdUser = await fetch(`${api}/recipe`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(newRecipe),
        });

        await mutate([...recipes, createdUser]);
    };

    return (
        <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InfoBox>
                    <Input placeholder={'Amazing chicken'} register={register} name={'name'} label={'Recipe title'} />{' '}
                    <Input
                        placeholder={'45'}
                        register={register}
                        name={'time'}
                        rules={{ valueAsNumber: true }}
                        label={'Time to prepare (in minutes)'}
                    />
                </InfoBox>
                <TagsWrapper>
                    <Typography size="lg" weight="semibold" as={'label'}>
                        Tags
                    </Typography>
                    <TagsBox>
                        {TagsData.map(dropdown => (
                            <Select
                                key={dropdown.id}
                                defaultValue={dropdown.defaultValue}
                                type={'secondary'}
                                control={control}
                                name={dropdown.name}
                            >
                                {dropdown.options.map(option => (
                                    <SelectItem key={uniqid()} value={option[1]} type={'secondary'}>
                                        {option[0]}
                                    </SelectItem>
                                ))}
                            </Select>
                        ))}
                    </TagsBox>
                </TagsWrapper>

                <NewIngredientGroup />
                <Input
                    as={'textarea'}
                    register={register}
                    rows={4}
                    name={'description'}
                    label={'Preparation instructions'}
                />
                <Button disabled={!!errors} css={{ alignSelf: 'start' }} size={'large'}>
                    Create recipe
                </Button>
            </Form>
        </FormProvider>
    );
}
