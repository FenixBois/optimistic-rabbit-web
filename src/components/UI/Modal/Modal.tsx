import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Close, Portal, Title } from '@radix-ui/react-dialog';
import { forwardRef, ReactNode } from 'react';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import { DialogContent, Header, StyledOverlay } from './Modal.styles';
import { IconButtonStyled } from '../IconButton';

interface ModalProps {
    title?: string;
    children?: ReactNode;
}

export const ModalContent = forwardRef<HTMLDivElement, ModalProps>(({ children, title }, forwardedRef) => {
    return (
        <Portal>
            <StyledOverlay />
            <DialogContent ref={forwardedRef}>
                <Header>
                    {title && (
                        <Title>
                            <Typography size={'xl'} weight={'bold'}>
                                {title}
                            </Typography>
                        </Title>
                    )}
                    <Close asChild>
                        <IconButtonStyled color={'secondary'}>
                            <Icon type={Icon.Types.CLOSE} />
                        </IconButtonStyled>
                    </Close>
                </Header>
                <div>{children}</div>
            </DialogContent>
        </Portal>
    );
});

ModalContent.displayName = 'ModalContent';

export const Modal = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;
