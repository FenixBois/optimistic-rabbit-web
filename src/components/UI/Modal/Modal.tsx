import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Close, Portal, Title } from '@radix-ui/react-dialog';
import { forwardRef, ReactNode } from 'react';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import { ButtonsBox, DialogContent, Header, StyledOverlay, Trigger } from './Modal.styles';
import { IconButtonStyled } from '../IconButton';

interface ModalProps {
    title?: string;
    children?: ReactNode;
    headerButtons?: ReactNode;
}

export const ModalContent = forwardRef<HTMLDivElement, ModalProps>(
    ({ children, title, headerButtons }, forwardedRef) => {
        return (
            <Portal>
                <StyledOverlay />
                <DialogContent ref={forwardedRef}>
                    <Header>
                        {title && (
                            <Title>
                                <Typography size={'xxl'} weight={'semibold'}>
                                    {title}
                                </Typography>
                            </Title>
                        )}
                        <ButtonsBox>
                            {headerButtons}
                            <Close asChild>
                                <IconButtonStyled color={'secondary'}>
                                    <Icon type={Icon.Types.CLOSE} />
                                </IconButtonStyled>
                            </Close>
                        </ButtonsBox>
                    </Header>
                    <div>{children}</div>
                </DialogContent>
            </Portal>
        );
    },
);

ModalContent.displayName = 'ModalContent';

export const Modal = DialogPrimitive.Root;
export const ModalTrigger = Trigger;
