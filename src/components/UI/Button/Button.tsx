import type { ReactNode } from 'react';
import type { VariantProps } from 'styles';
import { ButtonStyled } from './Button.styles';

export interface ButtonProps extends VariantProps<typeof ButtonStyled> {
    children: ReactNode;
}

export const Button = ({ children, type, size }: ButtonProps) => {
    return (
        <ButtonStyled type={type} size={size}>
            <span>{children}</span>
        </ButtonStyled>
    );
};
