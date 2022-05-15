import { styled } from 'styles';

export const IconButtonStyled = styled('button', {
    borderRadius: 15,
    cursor: 'pointer',
    border: 0,
    py: 10,
    px: 10,

    variants: {
        color: {
            primary: {
                backgroundColor: '$primarySolid',
                color: '$primaryHighContrastText',
                '&:hover': {
                    backgroundColor: '$primarySolidHover',
                    cursor: 'pointer',
                },
            },
            secondary: {
                backgroundColor: '$greyElementBackground',
                color: '$highContrastText',
                cursor: 'pointer',
            },
        },
    },

    defaultVariants: {
        color: 'primary',
    },
});
