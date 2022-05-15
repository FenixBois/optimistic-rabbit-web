import {styled} from 'styles';

export const ButtonStyled = styled('button', {
    borderRadius: 15,
    border: 'none',
    py: 18,
    px: 20,

    display: 'flex',
    alignItems: 'center',

    fontSize: '$buttonText',
    fontWeight: '$semibold',

    '&:hover': {
        cursor: 'pointer',
    },

    variants: {
        color: {
            primary: {
                backgroundColor: '$primarySolid',
                color: '$primaryHighContrastText',
                '&:hover': {
                    backgroundColor: '$primarySolidHover',
                },
            },
            secondary: {
                backgroundColor: '$greyElementBackground',
                color: '$lowContrastText',
                '&:hover': {
                    backgroundColor: '$greyElementHover',
                },
            },
        },
        size: {
            normal: {
                height: '$input',
            },
            large: {
                height: '$largeInput',
            },
        },
    },

    defaultVariants: {
        color: 'primary',
        size: 'normal',
    },
});
