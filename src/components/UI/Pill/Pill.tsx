import { ReactNode } from 'react';
import { VariantProps } from '../../../styles';
import { PillStyled } from './Pill.styles';

export interface PillProps extends VariantProps<typeof PillStyled> {
    children: ReactNode;
    icon?: ReactNode;
}

export const Pill = ({ children, type, icon }: PillProps) => {
    return (
        <PillStyled type={type}>
            {icon}
            {children}
        </PillStyled>
    );
};
