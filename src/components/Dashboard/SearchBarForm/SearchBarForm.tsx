import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import type { CSS } from '@stitches/react';

import { CreateRecipeModal } from 'components/Recipes';
import { Input, Select, SelectItem } from 'components/UI';

import { DROPDOWN_DATA } from './SearchBarFormData';
import { SearchBar, SearchInputBox, SelectContainerStyled } from './SearchBarForm.styles';
import { searchFilterAtom } from '../atoms';

export interface SearchBarFormProps {
    css?: CSS;
}

export function SearchBarForm({ css }: SearchBarFormProps) {
    const { handleSubmit, register, control } = useForm({ mode: 'onChange' });
    const [, setSearchFilter] = useAtom(searchFilterAtom);

    return (
        <SearchBar css={css}>
            <SearchInputBox>
                <Input
                    onChange={e => setSearchFilter(e.target.value)}
                    type={'primary'}
                    placeholder={'Search for a recipe!'}
                />
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
        </SearchBar>
    );
}
