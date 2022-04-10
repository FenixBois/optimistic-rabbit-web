import type * as Stitches from '@stitches/react';
import { createStitches, createTheme, globalCss } from '@stitches/react';

export type { VariantProps } from '@stitches/react';
export type CSS = Stitches.CSS<typeof config>;

export const { styled, css, getCssText, config } = createStitches({
    theme: {
        colors: {
            error: '#db4324',
            success: '#46a758',

            amber1: '#fefdfb', // app background
            amber3: '#fff4d5', // element background
            amber4: '#ffecbc', // element hover
            amber5: '#ffe3a2', // element selected
            amber7: '#f3ba63', // border
            amber8: '#ee9d2b', // border hover
            amber9: '#ffb224', // solid
            amber10: '#ffa01c', // solid hover
            amber11: '#ad5700', // low contrast text
            amber12: '#4e2009', // high contrast text

            sand1: '#fdfdfc', // app background
            sand3: '#f3f3f2', // element background
            sand4: '#eeeeec', // element hover
            sand5: '#e9e9e6', // element selected
            sand7: '#dbdbd7', // border
            sand8: '#c8c7c1', // border hover
            sand9: '#90908c', // solid
            sand10: '#868682', // solid hover
            sand11: '#706f6c', // low contrast text
            sand12: '#1b1b18', // high contrast text
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
        amber1: 'black', // app background
        background: 'black',
    },
});

const GlobalStyles = globalCss({
    '*': { margin: 0, padding: 0 },
});

GlobalStyles();
