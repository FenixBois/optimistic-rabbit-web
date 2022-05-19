import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { darkTheme } from 'styles';
import { Layout } from 'components/Layout';
import { Toaster } from 'react-hot-toast';

import '../styles/global.css';

function MyApp({ Component }: AppProps) {
    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: 'light',
                dark: darkTheme.className,
            }}
        >
            <Layout>
                <Component />
            </Layout>
            <Toaster />
        </NextThemesProvider>
    );
}

export default MyApp;
