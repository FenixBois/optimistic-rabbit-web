import { ReactNode } from 'react';
import type { VariantProps } from 'styles';
import { TextStyled } from './Typography.styles';

export interface TypographyProps extends VariantProps<typeof TextStyled> {
    children: ReactNode;
}

export const Typography = ({ children, size, weight }: TypographyProps) => {
    return (
        <TextStyled size={size} weight={weight}>
            {children}
        </TextStyled>
    );
};
