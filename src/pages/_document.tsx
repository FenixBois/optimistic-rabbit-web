import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from 'styles';

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="cs">
                <Head>
                    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" type="image/svg+xml" href="favicon/favicon.ico" />
                    <link rel="icon" type="image/png" href="favicon/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
