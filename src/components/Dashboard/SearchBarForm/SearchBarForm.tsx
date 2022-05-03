import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Button, Input, Select, SelectItem } from 'components/UI';
import { RecipeCard } from 'components/Recipes/RecipeCard';
import React from 'react';
import { DROPDOWN_DATA } from './SearchBarFormData';
import { SelectContainerStyled } from './SearchBarForm.styles';

export function SearchBarForm() {
    const { control, handleSubmit, register, setValue } = useForm<{ bartok: string }>({ mode: 'onChange' });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {/*<Select*/}
                    {/*    type={'secondary'}*/}
                    {/*    {...register('bartok')}*/}
                    {/*    onChange={(value: string) => setValue('bartok', value)}*/}
                    {/*>*/}
                    {/*    {options.map(option => (*/}
                    {/*        <SelectItem key={option.id} value={option.description}>*/}
                    {/*            {option.description}*/}
                    {/*        </SelectItem>*/}
                    {/*    ))}*/}
                    {/*</Select>*/}
                    <Input register={register} name={'bartok'} />

                    {/*<Input type={'primary'} suffix={<Icon size={'medium'} type={Icon.Types.SEARCH_ICON} />} />*/}
                    <Button>Add recipe</Button>
                    <SelectContainerStyled>
                        { DROPDOWN_DATA.map(dropdown => (
                            <Select key={dropdown.id} type={'primary'} onChange={(value: string) => setValue('bartok', value)}>
                                {dropdown.options.map(option => (
                                    <SelectItem key={option.id} value={option.description}>
                                        {option.description}
                                    </SelectItem>
                                ))}
                            </Select>
                        )) }
                    </SelectContainerStyled>
                </div>
            </form>
            <DevTool control={control} />

            <RecipeCard />
        </>
    );
}
