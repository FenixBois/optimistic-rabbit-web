import { Ingredient, NewIngredientGroupStyled } from './NewIngredientGroup.styles';
import { Icon, IconButton, Input, Select, SelectItem } from 'components/UI';
import { useFieldArray, useFormContext } from 'react-hook-form';

import type { Key } from 'react';
import { CreateRecipeFormValues } from '../CreateRecipeForm/types';

export function NewIngredientGroup() {
    const { register, control } = useFormContext<CreateRecipeFormValues>();

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
                            label={index === 0 ? 'Ingredience' : undefined}
                            register={register}
                            name={`ingredients.${index}.name` as const}
                            type={'secondary'}
                            placeholder={'Tomatoes'}
                        />
                        <Input
                            label={index === 0 ? 'Počet' : undefined}
                            register={register}
                            name={`ingredients.${index}.amount` as const}
                            type={'secondary'}
                            placeholder={'3'}
                            css={{ width: 30 }}
                        />
                        <Select control={control} name={`ingredients.${index}.unit` as const} type={'secondary'}>
                            {dropDownUnits.map(unit => (
                                <SelectItem type={'secondary'} key={unit.id} value={unit.description}>
                                    {unit.description}
                                </SelectItem>
                            ))}
                        </Select>
                        {index !== 0 && (
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

                        <IconButton
                            size={'normal'}
                            color={'primaryLight'}
                            onClick={(e: { preventDefault: () => void }) => {
                                e.preventDefault();
                                append({
                                    name: undefined,
                                    amount: undefined,
                                    unit: undefined,
                                });
                            }}
                        >
                            <Icon label={'Remove'} size={'medium'} type={Icon.Types.MINUS} />
                        </IconButton>
                    </Ingredient>
                ))}
            </NewIngredientGroupStyled>
        </>
    );
}