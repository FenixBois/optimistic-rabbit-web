import type * as Stitches from '@stitches/react';
import { createStitches, createTheme, globalCss } from '@stitches/react';

export type { VariantProps } from '@stitches/react';
export type { PropertyValue } from '@stitches/react';

export const { styled, css, getCssText, config } = createStitches({
    media: {
        sm: '(min-width: 640px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
    },
    theme: {
        colors: {
            error: '#db4324',
            success: '#46a758',

            appBackground: '#fefdfb', // app background
            primaryElementBackground: '#fff4d5', // element background
            primaryElementHover: '#ffecbc', // element hover
            primaryElementSelected: '#ffe3a2', // element selected
            primaryBorder: '#f3ba63', // border
            primaryBorderHover: '#ee9d2b', // border hover
            primarySolid: '#ffb224', // solid
            primarySolidHover: '#ffa01c', // solid hover
            primaryLowContrastText: '#ad5700', // low contrast text
            primaryHighContrastText: '#4e2009', // high contrast text

            // sand1: '#fdfdfc', // app background
            greyElementBackground: '#f3f3f2', // element hover
            greyElementHover: '#eeeeec', // element hover
            // sand5: '#e9e9e6', // element selected
            greyBorder: '#dbdbd7', // border
            greyBorderHover: '#c8c7c1', // border hover
            // sand9: '#90908c', // solid
            // sand10: '#868682', // solid hover
            lowContrastText: '#706f6c', // low contrast text
            highContrastText: '#1b1b18', // high contrast text

            overlayColor: '#1b1b1833',
        },
        sizes: {
            input: '32px',
            largeInput: '52px',
        },
        radii: {
            inputBorderRadius: '0.938rem',
        },
        fontWeights: {
            regular: 400,
            semibold: 600,
            bold: 700,
        },
        fontSizes: {
            md: '1rem',
            l: '1.14rem',
            xl: '1.7rem',
            xxl: '2.28rem',
            pageTitle: '6rem',
            buttonText: '1.14rem',
        },
        fonts: {
            poppins: 'Poppins, sans-serif',
        },
    },
    utils: {
        mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: Stitches.PropertyValue<'marginTop'>) => ({
            marginTop: value,
            marginBottom: value,
        }),
        px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
    },
});

export const darkTheme = createTheme({
    colors: {
        error: '#db4324',
        success: '#46a758',

        appBackground: '#fefdfb', // app background
        primaryElementBackground: '#fff4d5', // element background
        primaryElementHover: '#ffecbc', // element hover
        primaryElementSelected: '#ffe3a2', // element selected
        primaryBorder: '#f3ba63', // border
        primaryBorderHover: '#ee9d2b', // border hover
        primarySolid: '#ffb224', // solid
        primarySolidHover: '#ffa01c', // solid hover
        primaryLowContrastText: '#ad5700', // low contrast text
        primaryHighContrastText: '#4e2009', // high contrast text

        // sand1: '#fdfdfc', // app background
        // sand3: '#f3f3f2', // element background
        greyElementBackground: '#eeeeec', // element hover
        // sand5: '#e9e9e6', // element selected
        greyBorder: '#dbdbd7', // border
        // sand8: '#c8c7c1', // border hover
        // sand9: '#90908c', // solid
        // sand10: '#868682', // solid hover
        lowContrastText: '#706f6c', // low contrast text
        highContrastText: '#1b1b18', // high contrast text
    },
});

const GlobalStyles = globalCss({
    '*': { margin: 0, padding: 0, fontFamily: '$poppins' },
    html: { fontSize: 14 },
});

GlobalStyles();
