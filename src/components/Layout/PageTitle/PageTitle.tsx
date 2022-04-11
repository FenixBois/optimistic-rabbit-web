import type { ReactNode } from 'react';
import { StyledPageTitle } from './PageTitle.styles';

interface PageTitleProps {
    children: ReactNode;
}

export const PageTitle = ({ children }: PageTitleProps) => {
    return <StyledPageTitle>{children}</StyledPageTitle>;
};
