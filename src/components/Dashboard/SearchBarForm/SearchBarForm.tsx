import { useForm } from 'react-hook-form';
import { Button, Input, Modal, ModalContent, ModalTrigger, Select, SelectItem } from 'components/UI';
import { RecipeCard } from 'components/Recipes/RecipeCard';
import { DROPDOWN_DATA } from './SearchBarFormData';
import { SearchBarFormStyled, SearchInputBox, SelectContainerStyled } from './SearchBarForm.styles';

export function SearchBarForm() {
    const { handleSubmit, register, control } = useForm({ mode: 'onChange' });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <>
            <SearchBarFormStyled onSubmit={handleSubmit(onSubmit)}>
                <SearchInputBox>
                    <Input register={register} name={'bartok'} type={'primary'} />
                    <Modal>
                        <ModalContent title={'Very epic long recipe name'}>Sem ten form</ModalContent>
                        <ModalTrigger asChild>
                            <Button size={'large'}>Add recipe</Button>
                        </ModalTrigger>
                    </Modal>
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
            </SearchBarFormStyled>
            <RecipeCard />
        </>
    );
}
