import type { AppProps } from 'next/app';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { darkTheme, lightTheme } from 'styles/themes';
import { Layout } from 'components/Layout';

import 'windi.css';

function MyApp({ Component }: AppProps) {
    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className,
            }}
        >
            <NextUIProvider>
                <Layout>
                    <Component />
                </Layout>
            </NextUIProvider>
        </NextThemesProvider>
    );
}

export default MyApp;
