import { ErrorMessage, Ingredient, NewIngredientGroupStyled } from './NewIngredientGroup.styles';
import { Icon, IconButton, Input, Select, SelectItem } from 'components/UI';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Key } from 'react';
import { CreateRecipeFormValues } from '../CreateRecipeForm/types';

export function NewIngredientGroup() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<CreateRecipeFormValues>();

    const { fields, append, remove } = useFieldArray({
        name: 'ingredients',
        control,
    });

    const dropDownUnits = [
        {
            id: 1,
            description: 'g',
        },
        {
            id: 2,
            description: 'ml',
        },
        {
            id: 3,
            description: 'pieces',
        },
    ];

    return (
        <>
            <NewIngredientGroupStyled>
                {fields.map((field: { id: Key | null | undefined }, index: number) => (
                    <Ingredient key={field.id}>
                        <Input
                            label={index === 0 ? 'Ingredients' : undefined}
                            register={register}
                            name={`ingredients.${index}.name` as const}
                            type={'secondary'}
                            placeholder={'Tomatoes'}
                            css={{ height: 32 }}
                        />
                        <Input
                            htmlType="number"
                            label={index === 0 ? 'Amount' : undefined}
                            register={register}
                            rules={{ valueAsNumber: true }}
                            name={`ingredients.${index}.amount` as const}
                            type={'secondary'}
                            placeholder={'3'}
                            css={{ width: 50, height: 32 }}
                        />
                        <Select control={control} name={`ingredients.${index}.unit` as const} type={'secondary'}>
                            {dropDownUnits.map(unit => (
                                <SelectItem type={'secondary'} key={unit.id} value={unit.description}>
                                    {unit.description}
                                </SelectItem>
                            ))}
                        </Select>
                        {fields.length > 1 && (
                            <IconButton
                                size={'normal'}
                                color={'primaryLight'}
                                onClick={(e: { preventDefault: () => void }) => {
                                    e.preventDefault();
                                    remove(index);
                                }}
                            >
                                <Icon label={'Remove'} size={'medium'} type={Icon.Types.MINUS} />
                            </IconButton>
                        )}

                        {index + 1 === fields.length && (
                            <IconButton
                                size={'normal'}
                                color={'primary'}
                                onClick={(e: { preventDefault: () => void }) => {
                                    e.preventDefault();
                                    append({
                                        name: undefined,
                                        amount: undefined,
                                        unit: undefined,
                                    });
                                }}
                            >
                                <Icon label={'Add'} size={'medium'} type={Icon.Types.PLUS} />
                            </IconButton>
                        )}
                    </Ingredient>
                ))}
                {errors?.ingredients?.map(item => {
                    return (
                        <>
                            <ErrorMessage> {item?.amount?.message}</ErrorMessage>
                            <ErrorMessage> {item?.unit?.message}</ErrorMessage>
                            <ErrorMessage> {item?.name?.message}</ErrorMessage>
                        </>
                    );
                })}
            </NewIngredientGroupStyled>
        </>
    );
}
