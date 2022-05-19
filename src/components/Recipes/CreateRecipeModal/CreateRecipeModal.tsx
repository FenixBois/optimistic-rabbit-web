import { Button, Modal, ModalContent, ModalTrigger } from '../../UI';
import { CreateRecipeForm } from './CreateRecipeForm';
import { useState } from 'react';

export const CreateRecipeModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <Modal open={open} onOpenChange={setOpen}>
            <ModalContent title={'Create a recipe'}>
                <CreateRecipeForm onClose={() => setOpen(false)} />
            </ModalContent>
            <ModalTrigger asChild>
                <Button size={'large'}>Add recipe</Button>
            </ModalTrigger>
        </Modal>
    );
};
