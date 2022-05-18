import { styled } from 'styles';

export const Typography = styled('p', {
    color: '$highContrastText',
    fontFamily: '$poppins',

    variants: {
        size: {
            md: {
                fontSize: '$md',
            },
            lg: {
                fontSize: '$lg',
            },
            xl: {
                fontSize: '$xl',
            },
            xxl: {
                fontSize: '$xxl',
            },
        },
        weight: {
            regular: {
                fontWeight: '$regular',
            },
            semibold: {
                fontWeight: '$semibold',
            },
            bold: {
                fontWeight: '$bold',
            },
        },
    },

    defaultVariants: {
        size: 'medium',
        weight: 'regular',
    },
});
