import { styled } from 'styles';

export const TextStyled = styled('p', {
    color: '$highContrastText',

    variants: {
        size: {
            md: {
                fontSize: '$md',
            },
            l: {
                fontSize: '$l',
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
