import { styled } from 'styles';

export const IconButtonStyled = styled('button', {
    borderRadius: 15,
    border: 0,
    py: 10,
    px: 10,

    variants: {
        type: {
            primary: {
                backgroundColor: '$primarySolid',
                color: '$primaryHighContrastText',
                '&:hover': {
                    backgroundColor: '$primarySolidHover',
                    cursor: 'pointer',
                },
            },
            secondary: {
                // TBA
            },
        },
    },

    defaultVariants: {
        type: 'primary',
    },
});
