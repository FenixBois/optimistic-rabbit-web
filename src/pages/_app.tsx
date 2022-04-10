import type { AppProps } from 'next/app';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { darkTheme } from 'styles';
import { Layout } from 'components/Layout';

import 'normalize.css';
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
        </NextThemesProvider>
    );
}

export default MyApp;
