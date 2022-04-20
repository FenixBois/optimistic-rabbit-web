import { styled } from 'styles';

export const ButtonStyled = styled('button', {
    borderRadius: 15,
    border: 0,
    py: 18,
    px: 20,

    fontSize: '$buttonText',
    fontWeight: '$semibold',

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
