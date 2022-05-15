import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'styles';
import { ButtonStyled } from './Button.styles';

type NativeButtonAttributes = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'form' | 'type'>;

type ButtonRef = HTMLButtonElement | null;

export interface ButtonProps extends VariantProps<typeof ButtonStyled>, NativeButtonAttributes {
    children: ReactNode;
}

export const Button = forwardRef<ButtonRef, ButtonProps>(
    ({ children, color, type, size, ...props }: ButtonProps, ref) => {
        return (
            <ButtonStyled color={color} ref={ref} type={type} size={size} {...props}>
                <span>{children}</span>
            </ButtonStyled>
        );
    },
);
Button.displayName = 'Button';
