import type {ButtonHTMLAttributes, ReactNode} from 'react';
import {forwardRef} from 'react';
import type {VariantProps} from 'styles';
import {ButtonStyled} from './Button.styles';
import {CSS} from "@stitches/react";

type NativeButtonAttributes = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'form' | 'type'>;

type ButtonRef = HTMLButtonElement | null;

export interface ButtonProps extends VariantProps<typeof ButtonStyled>, NativeButtonAttributes {
    children: ReactNode;
    css?: CSS;
}

export const Button = forwardRef<ButtonRef, ButtonProps>(
    ({children, color, type, size, css, ...props}: ButtonProps, ref) => {
        return (
            <ButtonStyled color={color} ref={ref} type={type} size={size} css={css} {...props}>
                <span>{children}</span>
            </ButtonStyled>
        );
    },
);
Button.displayName = 'Button';
