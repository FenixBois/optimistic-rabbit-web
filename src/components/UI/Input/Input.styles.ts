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
        color: {
            disabled: {},
            primary: {
                fontSize: '$lg',
                fontWeight: '$semibold',
                color: '$primaryLowContrastText',
            },
            secondary: {
                fontSize: '$md',
                fontWeight: '$regular',
                color: '$lowContrastText',
            },
        },
    },

    defaultVariants: {
        color: 'secondary',
    },
});

export const Prefix = styled('span', {
    marginRight: 10,
});

export const Suffix = styled('span', {
    marginLeft: 10,
});

export const LabelWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
});
