import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { VariantProps } from 'styles';
import { ButtonStyled } from './Button.styles';

type NativeButtonAttributes = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'form' | 'type'>;

export interface ButtonProps extends VariantProps<typeof ButtonStyled>, NativeButtonAttributes {
    children: ReactNode;
}

export const Button = ({ children, color, type, size, ...props }: ButtonProps) => {
    return (
        <ButtonStyled color={color} type={type} size={size} {...props}>
            <span>{children}</span>
        </ButtonStyled>
    );
};
