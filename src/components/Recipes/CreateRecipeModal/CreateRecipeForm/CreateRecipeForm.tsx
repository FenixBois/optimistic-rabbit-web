import { FormProvider, useForm } from 'react-hook-form';
import { Button, Input, Select, SelectItem, Typography } from 'components/UI';
import { DevTool } from '@hookform/devtools';

import uniqid from 'uniqid';

import type { CreateRecipeFormValues } from './types';
import { TagsData } from './types';
import { Form, InfoBox, TagsBox, TagsWrapper } from './CreateRecipeForm.styles';
import { NewIngredientGroup } from '../NewIngredientGroup';
import { fetcher } from 'utils';
import { api } from 'config';
import useSWR from 'swr';

export function CreateRecipeForm() {
    const { data: recipes, mutate } = useSWR(`${api}/recipes`, fetcher);

    const methods = useForm<CreateRecipeFormValues>({
        mode: 'onChange',
        defaultValues: {
            ingredients: [
                {
                    unit: undefined,
                    name: undefined,
                    amount: undefined,
                },
            ],
        },
    });
    const { control, register, handleSubmit } = methods;

    const onSubmit = async (recipe: CreateRecipeFormValues) => {
        const newRecipe = {
            vegetarian: false,
            ...recipe,
            media: recipe.media.toUpperCase(),
            difficulty: recipe.difficulty.toUpperCase(),
            taste: recipe.taste.toUpperCase(),
            servings: 2,
            reference: 'asd',
            time: 12,
        };

        console.log(...recipes, newRecipe);
        await fetch(`${api}/recipe`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(newRecipe),
        });

        await mutate({ ...recipes, newRecipe });
    };
    // {
    //     "name": "test",
    //     "description": "test long text but longer",
    //     "servings": 2,
    //     "time": 10,
    //     "reference": "Random game",
    //     "difficulty": "MEDIUM",
    //     "media": "GAME",
    //     "taste": "SALTY",
    //     "vegetarian": false,
    //     "ingredients": [
    //     {
    //         "name": "trava zelena",
    //         "amount": 10,
    //         "unit": "PIECES"
    //     },
    //     {
    //         "name": "voda",
    //         "amount": 1000,
    //         "unit": "ML"
    //     }
    // ]
    // }
    return (
        <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InfoBox>
                    <Input placeholder={'Amazing chicken'} register={register} name={'name'} label={'Recipe title'} />{' '}
                    <Input
                        placeholder={'45'}
                        register={register}
                        name={'time'}
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
                <Button css={{ alignSelf: 'start' }} size={'large'}>
                    Create recipe
                </Button>
            </Form>
            <DevTool control={control} />
        </FormProvider>
    );
}
