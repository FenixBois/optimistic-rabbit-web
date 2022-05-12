import type { ReactNode } from 'react';
import { StyledPageTitle } from './PageTitle.styles';
import type { CSS } from '@stitches/react';

interface PageTitleProps {
    children: ReactNode;
    css?: CSS;
}

export const PageTitle = ({ children, css, ...props }: PageTitleProps) => {
    return <StyledPageTitle {...props}>{children}</StyledPageTitle>;
};
