import {Ingredient, NewIngredientGroupStyled} from './NewIngredientGroup.styles';
import {Button, Icon, IconButton, Input, Select, SelectItem} from 'components/UI';
import {Controller, useFieldArray, useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";

import type {Key} from 'react';

type FormValues = {
    ingredients: {
        name: string;
        amount: number;
        unit: string;
    }[];
};

export function NewIngredientGroup() {

    const {
        register,
        control,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm<FormValues>({
        defaultValues: {
            ingredients: [{name: undefined, amount: undefined, unit: undefined}]
        }
    });
    const {fields, append, remove} = useFieldArray({
        name: "ingredients",
        control
    });

    const onSubmit = (data: FormValues) => console.log(data);

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

    return (<>

            <NewIngredientGroupStyled onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field: { id: Key | null | undefined; }, index: number) => (
                    <Ingredient key={field.id}>
                        <Input register={register} name={`ingredients.${index}.name` as const} type={'secondary'}
                               placeholder={'Tomatoes'}/>
                        <Input register={register} name={`ingredients.${index}.amount` as const} type={'secondary'}
                               placeholder={'3'}
                               css={{width: 30}}/>

                        <Controller
                            control={control}
                            name={`ingredients.${index}.type` as const}

                            render={({field: {onChange, value, ref}}) => (
                                <Select
                                    type={"secondary"}
                                    ref={ref}
                                    onChange={onChange}
                                    value={value}

                                >
                                    {dropDownUnits.map(unit => (
                                        <SelectItem type={'secondary'} key={unit.id} value={unit.description}>
                                            {unit.description}
                                        </SelectItem>
                                    ))}
                                </Select>
                            )}
                        />

                        <IconButton size={'normal'} color={'primary'}
                                    onClick={(e: { preventDefault: () => void; }) => {
                                        e.preventDefault();
                                        remove(index)
                                    }}
                        >
                            <Icon
                                label={'Remove'}
                                size={'medium'}
                                type={Icon.Types.MINUS}
                            />
                        </IconButton>
                    </Ingredient>

                ))}
                <Button size={'large'} onClick={(e: { preventDefault: () => void; }) => {
                    e.preventDefault();
                    append({
                        name: undefined,
                        amount: undefined,
                        unit: undefined
                    })
                }}>Add</Button>
            </NewIngredientGroupStyled>

            <DevTool control={control}/>
        </>
    );
};
