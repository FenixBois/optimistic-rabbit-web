import {styled} from 'styles';

export const IconButtonStyled = styled('button', {
    borderRadius: 15,
    cursor: 'pointer',
    border: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

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
