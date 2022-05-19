import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import type { CSS } from '@stitches/react';

import { CreateRecipeModal } from 'components/Recipes';
import { Input, Select, SelectItem } from 'components/UI';

import { DROPDOWN_DATA } from './SearchBarFormData';
import { SearchBar, SearchInputBox, SelectContainerStyled } from './SearchBarForm.styles';
import { searchFilterAtom } from '../atoms';
import { DevTool } from '@hookform/devtools';
import { tagFiltersAtom } from '../atoms/tagFiltersAtom';

export interface SearchBarFormProps {
    css?: CSS;
}

export function SearchBarForm({ css }: SearchBarFormProps) {
    const { handleSubmit, control } = useForm({ mode: 'onChange' });
    const [, setSearchFilter] = useAtom(searchFilterAtom);
    const [, setTagsFilter] = useAtom(tagFiltersAtom);

    const onFilterChange = (values: any) => {
        const filters = { ...values };
        Object.keys(filters).forEach(key => {
            if (filters[key] === undefined) {
                delete filters[key];
            }
        });
        setTagsFilter(filters);
    };

    return (
        <SearchBar css={css}>
            <form>
                <SearchInputBox>
                    <Input
                        onChange={e => setSearchFilter(e.target.value)}
                        type={'primary'}
                        placeholder={'Search for a recipe!'}
                    />
                </SearchInputBox>
            </form>
            <CreateRecipeModal />
            <SelectContainerStyled>
                {DROPDOWN_DATA.map((dropdown, index) => (
                    <Select
                        onSelect={handleSubmit(onFilterChange)}
                        key={index}
                        type={'primary'}
                        control={control}
                        name={dropdown.name}
                    >
                        {dropdown.options.map((option, index) => (
                            <SelectItem key={index} value={option}>
                                {option}
                            </SelectItem>
                        ))}
                    </Select>
                ))}
                <DevTool control={control} />
            </SelectContainerStyled>
        </SearchBar>
    );
}
