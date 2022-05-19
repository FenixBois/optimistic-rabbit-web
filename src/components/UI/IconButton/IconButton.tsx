import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { VariantProps } from 'styles';
import { IconButtonStyled } from './IconButton.styles';
import { CSS } from '@stitches/react';

type NativeIconButtonAttributes = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'form'>;

type IconButtonRef = HTMLButtonElement | null;

export interface IconButtonProps extends VariantProps<typeof IconButtonStyled>, NativeIconButtonAttributes {
    children: ReactNode;
    css?: CSS;
}

export const IconButton = forwardRef<IconButtonRef, IconButtonProps>(
    ({ children, color, size, css, ...props }: IconButtonProps, ref) => {
        return (
            <IconButtonStyled ref={ref} color={color} size={size} css={css} {...props}>
                {children}
            </IconButtonStyled>
        );
    },
);

IconButton.displayName = 'IconButton';
