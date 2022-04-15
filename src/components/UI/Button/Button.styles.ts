import { styled } from 'styles';

export const ButtonStyled = styled('button', {
    borderRadius: '$inputBorderRadius',
    fontSize: '13px',
    border: '',
    padding: 10,
    variants: {
        type: {
            primary: {
                backgroundColor: '$primarySolid',
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
