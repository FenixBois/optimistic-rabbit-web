import type { ReactNode } from 'react';

import { Footer } from '../Footer';

import { Page } from './Layout.styles';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <Page>{children}</Page>
            <Footer />
        </>
    );
}
