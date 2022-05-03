import type { ReactNode } from 'react';
import type { VariantProps } from 'styles';
import { ButtonStyled } from './Button.styles';

export interface ButtonProps extends VariantProps<typeof ButtonStyled> {
    children: ReactNode;
}

export const Button = ({ children, type }: ButtonProps) => {
    return <ButtonStyled type={type}>{children}</ButtonStyled>;
};
