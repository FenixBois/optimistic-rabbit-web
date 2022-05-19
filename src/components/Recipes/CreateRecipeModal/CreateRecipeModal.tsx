import { Button, Modal, ModalContent, ModalTrigger } from '../../UI';
import { CreateRecipeForm } from './CreateRecipeForm';

export const CreateRecipeModal = () => {
    return (
        <>
            <Modal allowPinchZoom={false} modal={false}>
                <ModalContent title={'Create a recipe'}>
                    <CreateRecipeForm />
                </ModalContent>
                <ModalTrigger asChild>
                    <Button size={'large'}>Add recipe</Button>
                </ModalTrigger>
            </Modal>
        </>
    );
};
