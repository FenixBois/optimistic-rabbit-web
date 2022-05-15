import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'styles';
import { IconButtonStyled } from './IconButton.styles';

type NativeIconButtonAttributes = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'form'>;

type IconButtonRef = HTMLButtonElement | null;

export interface IconButtonProps extends VariantProps<typeof IconButtonStyled>, NativeIconButtonAttributes {
    children: ReactNode;
}

export const IconButton = forwardRef<IconButtonRef, IconButtonProps>(
    ({ children, color, ...props }: IconButtonProps, ref) => {
        return (
            <IconButtonStyled ref={ref} color={color} {...props}>
                {children}
            </IconButtonStyled>
        );
    },
);

IconButton.displayName = 'IconButton';
