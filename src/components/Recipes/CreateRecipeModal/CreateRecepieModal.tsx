import { Button, Modal, ModalContent, ModalTrigger } from '../../UI';
import { CreateRecipeForm } from './CreateRecipeForm';

export const CreateRecipeModal = () => {
    return (
        <>
            <Modal>
                <ModalContent title={'Very epic long recipe name'}>
                    <CreateRecipeForm />
                </ModalContent>
                <ModalTrigger asChild>
                    <Button size={'large'}>Add recipe</Button>
                </ModalTrigger>
            </Modal>
        </>
    );
};
