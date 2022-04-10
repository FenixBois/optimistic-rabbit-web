import type { ReactNode } from 'react';
import { ButtonStyled } from './Button.styles';
import type { VariantProps } from 'styles';

export interface ButtonProps extends VariantProps<typeof ButtonStyled> {
    children: ReactNode;
}

export const Button = ({ children, type }: ButtonProps) => {
    return <ButtonStyled type={type}>{children}</ButtonStyled>;
};
