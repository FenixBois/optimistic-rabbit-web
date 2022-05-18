import { FormProvider, useForm } from 'react-hook-form';
import { Button, Input, Select, SelectItem, Typography } from 'components/UI';
import { DevTool } from '@hookform/devtools';

import uniqid from 'uniqid';

import type { CreateRecipeFormValues } from './types';
import { TagsData } from './types';
import { Form, InfoBox, TagsBox, TagsWrapper } from './CreateRecepieForm.styles';
import { NewIngredientGroup } from '../NewIngredientGroup';

export function CreateRecipeForm() {
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
    const { control, register } = methods;

    return (
        <FormProvider {...methods}>
            <Form>
                <InfoBox>
                    <Input placeholder={'Amazing chicken'} register={register} name={'title'} label={'Recepie title'} />{' '}
                    <Input
                        placeholder={'45'}
                        register={register}
                        name={'title'}
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
                                    <SelectItem key={uniqid()} value={option[1]}>
                                        {option[0]}
                                    </SelectItem>
                                ))}
                            </Select>
                        ))}
                    </TagsBox>
                </TagsWrapper>

                <NewIngredientGroup />
                <Input as={'textarea'} register={register} rows={4} name={'title'} label={'Recepie title'} />
                <Button size={'large'}>Create recipe</Button>
            </Form>
            <DevTool control={control} />
        </FormProvider>
    );
}
