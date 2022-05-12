import { styled } from 'styles';

export const InputWrapper = styled('div', {
    display: 'inline-flex',
    position: 'relative',
    boxSizing: 'border-box',
    alignItems: 'center',
    flexGrow: 1,

    border: 'none',

    variants: {
        type: {
            disabled: {
                opacity: 0.5,
                cursor: 'not-allowed',
                borderColor: 'none',
            },
            primary: {
                borderRadius: 15,
                backgroundColor: '$primaryElementBackground',
                color: '$primaryLowContrastText',
                height: '$largeInput',
                px: 30,
                py: 15,

                '&:hover': {
                    backgroundColor: '$primaryElementHover',
                },
                '&:focus-within': {
                    backgroundColor: '$primaryElementSelected',
                },
            },
            secondary: {
                backgroundColor: '$greyElementBackground',
                borderRadius: 10,
                height: '$input',

                px: 12,
                py: 6,
            },
        },
    },
    defaultVariants: {
        type: 'secondary',
    },
});

export const InputStyled = styled('input', {
    border: 'none',
    height: '100%',
    width: '100%',

    backgroundColor: 'transparent',

    padding: 0,
    outline: 0,

    '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: 'transparent',
    },

    variants: {
        type: {
            disabled: {},
            primary: {
                fontSize: '$large',
                fontWeight: '$semibold',
                color: '$primaryLowContrastText',
            },
            secondary: {
                fontSize: '$medium',
                fontWeight: '$regular',
                color: '$lowContrastText',
            },
        },
    },

    defaultVariants: {
        type: 'secondary',
    },
});

export const Prefix = styled('span', {
    marginRight: 10,
});

export const Suffix = styled('span', {
    marginLeft: 10,
});
