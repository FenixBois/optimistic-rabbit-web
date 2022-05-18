import { useForm } from 'react-hook-form';
import { Input, Select, SelectItem } from 'components/UI';
import { DROPDOWN_DATA } from './SearchBarFormData';
import { SearchBarFormStyled, SearchInputBox, SelectContainerStyled } from './SearchBarForm.styles';
import { CreateRecipeModal } from 'components/Recipes';
import { DevTool } from '@hookform/devtools';

export function SearchBarForm() {
    const { handleSubmit, register, control } = useForm({ mode: 'onChange' });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <SearchBarFormStyled onSubmit={handleSubmit(onSubmit)}>
            <SearchInputBox>
                <Input register={register} name={'bartok'} type={'primary'} placeholder={'Search for a recipe!'} />
                <CreateRecipeModal />
            </SearchInputBox>
            <SelectContainerStyled>
                {DROPDOWN_DATA.map(dropdown => (
                    <Select key={dropdown.id} type={'primary'} control={control} name={'barrtoksmradok'}>
                        {dropdown.options.map(option => (
                            <SelectItem key={option.id} value={option.description}>
                                {option.description}
                            </SelectItem>
                        ))}
                    </Select>
                ))}
            </SelectContainerStyled>
            <DevTool control={control} />
        </SearchBarFormStyled>
    );
}
