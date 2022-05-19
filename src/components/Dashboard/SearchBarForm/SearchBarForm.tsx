import { useForm } from 'react-hook-form';
import { Select, SelectItem } from 'components/UI';
import { DROPDOWN_DATA } from './SearchBarFormData';
import { SearchBarFormStyled, SearchInputBox, SelectContainerStyled } from './SearchBarForm.styles';
import { CreateRecipeModal } from 'components/Recipes';
import { CSS } from '@stitches/react';
import { useState } from 'react';

export interface SearchBarFormProps {
    css?: CSS;
}

export function SearchBarForm({ css }: SearchBarFormProps) {
    const { handleSubmit, register, control } = useForm({ mode: 'onChange' });
    const [recipeName, setRecipeName] = useState('');

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <SearchBarFormStyled onSubmit={handleSubmit(onSubmit)} css={css}>
            <SearchInputBox>
                {/*<Input onChange={(e) => setRecipeName(e.target.value)} type={'primary'} placeholder={'Search for a recipe!'} />*/}
            </SearchInputBox>
            <CreateRecipeModal />
            <SelectContainerStyled>
                {DROPDOWN_DATA.map((dropdown, index) => (
                    <Select
                        key={index}
                        type={'primary'}
                        control={control}
                        name={dropdown.name}
                        defaultValue={dropdown.label}
                    >
                        {dropdown.options.map((option, index) => (
                            <SelectItem key={index} value={option}>
                                {option}
                            </SelectItem>
                        ))}
                    </Select>
                ))}
            </SelectContainerStyled>
        </SearchBarFormStyled>
    );
}
