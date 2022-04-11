import type { ReactNode } from 'react';

import Head from 'next/head';

import { Footer } from '../Footer';

import { Page } from './Layout.styles';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>Optimistic Rabbit Cookbook</title>
            </Head>
            <Page>{children}</Page>
            <Footer />
        </>
    );
}
