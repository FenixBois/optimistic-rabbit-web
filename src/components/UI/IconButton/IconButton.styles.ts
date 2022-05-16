import {styled} from 'styles';

export const IconButtonStyled = styled('button', {
    borderRadius: 15,
    cursor: 'pointer',
    border: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

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
            primaryLight: {
                backgroundColor: '$primaryElementBackground',
                color: '$primaryLowContrastText',
                '&:hover': {
                    backgroundColor: 'primaryElementHover',
                },
            },
            secondary: {
                backgroundColor: '$greyElementBackground',
                color: '$highContrastText',
            },
        },
        size: {
            normal: {
                height: '$input',
                width: '$input',
                borderRadius: '$smallInputBorderRadius',
            },
            large: {
                height: '$largeInput',
                width: '$largeInput',
            },
        },
    },

    defaultVariants: {
        color: 'primary',
        size: 'normal',
    },
});
