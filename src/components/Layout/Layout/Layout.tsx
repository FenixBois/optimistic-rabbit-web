import type { ReactNode } from 'react';
import { Footer } from '../Footer';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <main className="min-hi-screen">{children}</main>
            <Footer />
        </>
    );
}
