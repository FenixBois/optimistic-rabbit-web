import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Button, Input, Select, SelectItem } from 'components/UI';
import { RecipeCard } from 'components/Recipes/RecipeCard';
import React from 'react';

export function SearchBarForm() {
    const { control, handleSubmit, register, setValue } = useForm<{ bartok: string }>({ mode: 'onChange' });

    const options = [
        {
            id: 1,
            description: 'Select 1',
        },
        {
            id: 2,
            description: 'Select 2',
        },
        {
            id: 3,
            description: 'Select 3',
        },
    ];

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Select
                        type={'secondary'}
                        {...register('bartok')}
                        onChange={(value: string) => setValue('bartok', value)}
                    >
                        {options.map(option => (
                            <SelectItem key={option.id} value={option.description}>
                                {option.description}
                            </SelectItem>
                        ))}
                    </Select>
                    {/*<Select type={'primary'} onChange={(value: string) => setValue('bartok', value)}>*/}
                    {/*    {options.map(option => (*/}
                    {/*        <SelectItem key={option.id} value={option.description}>*/}
                    {/*            {option.description}*/}
                    {/*        </SelectItem>*/}
                    {/*    ))}*/}
                    {/*</Select>*/}
                    <Input register={register} name={'bartok'} />

                    {/*<Input type={'primary'} suffix={<Icon size={'medium'} type={Icon.Types.SEARCH_ICON} />} />*/}
                    <Button>Add recipe</Button>
                </div>
            </form>
            <DevTool control={control} />

            <RecipeCard />
        </>
    );
}
