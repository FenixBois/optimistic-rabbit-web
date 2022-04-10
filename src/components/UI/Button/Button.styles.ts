import { styled } from 'styles';

export const ButtonStyled = styled('button', {
    borderRadius: '20px',
    fontSize: '13px',
    border: '0',

    variants: {
        type: {
            primary: {
                backgroundColor: '$amber9',
            },
            secondary: {
                backgroundColor: '$amber3',
                '&:hover': {
                    backgroundColor: 'lightgray',
                },
            },
        },
    },

    defaultVariants: {
        type: 'primary',
    },
});
