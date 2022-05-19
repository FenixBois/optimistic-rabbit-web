import { FormProvider, useForm } from 'react-hook-form';
import useSWR from 'swr';
import * as z from 'zod';
import { Button, Input, Select, SelectItem, Typography ,Switch} from 'components/UI';
import { zodResolver } from '@hookform/resolvers/zod';

import uniqid from 'uniqid';

import { TagsData } from './types';
import { Form, InfoBox, TagsBox, TagsWrapper } from './CreateRecipeForm.styles';
import { NewIngredientGroup } from '../NewIngredientGroup';
import { fetcher, serialize } from 'utils';
import { api } from 'config';
import type { Recipe } from 'types';
import { useAtom } from 'jotai';
import { tagFiltersAtom } from '../../../Dashboard/atoms';
import { toast } from 'react-hot-toast';

interface CreateRecipeFormType {
    onClose: () => void;
}

export function CreateRecipeForm({ onClose }: CreateRecipeFormType) {
    const [tagsFilters] = useAtom(tagFiltersAtom);

    const { data: recipes, mutate } = useSWR<Recipe[]>(['recipes', serialize(tagsFilters)], () =>
        fetcher(`${api}/recipes`),
    );

    type Form = z.infer<typeof schema>;

    const schema = z.object({
        name: z.string().min(1, { message: 'Title is required' }),
        time: z.number().min(1, { message: 'Time is required' }),
        reference: z.string().min(1, { message: 'Reference is required' }),
        description: z.string().min(1, { message: 'Description is required' }),
        ingredients: z.array(
            z.object({
                name: z.string().min(1, { message: 'Title is required' }),
                amount: z.number(),
                unit: z.enum(['ml', 'g', 'pieces']),
            }),
        ),
        media: z.enum(['film', 'book', 'game']),
        taste: z.enum(['sweet', 'spicy', 'bitter', 'sour', 'salty']),
        difficulty: z.enum(['easy', 'medium', 'hard']),
    });

    const methods = useForm<Form>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: {
            difficulty: 'easy',
            media: 'book',
            taste: 'sweet',
            ingredients: [
                {
                    unit: 'g',
                    name: undefined,
                    amount: 1,
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

    const onSubmit = async (recipe: Form) => {
        onClose();

        const newRecipe = {
            ...recipe,
            servings: 2,
            vegetarian: false,
        };
        const createNew = () => {
            return fetch(`${api}/recipe`, {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify(newRecipe),
            });
        };

        await toast.promise(
            createNew(),
            {
                loading: 'Loading',
                success: 'Got the data',
                error: 'Error when fetching',
            },
            {
                position: 'top-right',
            },
        );

        await mutate();
    };

    return (
        <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InfoBox>
                    <Input
                        placeholder={'Amazing chicken'}
                        errorMessage={errors.name?.message}
                        register={register}
                        name={'name'}
                        label={'Recipe title'}
                    />

                    <Input
                        placeholder={'45'}
                        register={register}
                        name={'time'}
                        errorMessage={errors.time?.message}
                        htmlType={'number'}
                        rules={{ valueAsNumber: true }}
                        label={'Time to prepare (in minutes)'}
                    />
                    <Input
                        placeholder={'Legend of Zelda'}
                        register={register}
                        name={'reference'}
                        errorMessage={errors.reference?.message}
                        label={'Name of the book / movie / game '}
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
                <div>
                    <Typography>Is your meal vegetarian?</Typography>
                    <Switch
                        iconOn={<Icon type={Icon.Types.SUN_ICON} />}
                        iconOff={<Icon type={Icon.Types.MOON_ICON} />}
                    />
                </div>
                <Input
                    as={'textarea'}
                    register={register}
                    rows={4}
                    errorMessage={errors.description?.message}
                    name={'description'}
                    label={'Preparation instructions'}
                />
                <Button type={'submit'} css={{ alignSelf: 'start' }} size={'large'}>
                    Create recipe
                </Button>
            </Form>
        </FormProvider>
    );
}
