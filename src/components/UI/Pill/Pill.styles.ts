import { styled } from 'styles';

export const PillStyled = styled('span', {
    borderRadius: 20,
    border: 0,
    py: 5,
    px: 15,

    variants: {
        type: {
            primary: {
                backgroundColor: '$primaryElementBackground',
                color: '$primarySolid',
            },
        },
    },

    defaultVariants: {
        type: 'primary',
    },
});
