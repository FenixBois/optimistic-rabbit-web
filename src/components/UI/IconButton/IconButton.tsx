import type { ReactNode } from 'react';
import type { VariantProps } from 'styles';
import { IconButtonStyled } from './IconButton.styles';

export interface IconButtonProps extends VariantProps<typeof IconButtonStyled> {
    children: ReactNode;
}

export const IconButton = ({ children, type }: IconButtonProps) => {
    return <IconButtonStyled type={type}>{children}</IconButtonStyled>;
};
