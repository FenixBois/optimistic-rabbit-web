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
                borderColor: '$primaryElementBackground',
                borderStyle: 'solid',
                borderWidth: 1,
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
                borderColor: '$greyElementBackground',
                borderStyle: 'solid',
                borderWidth: 1,
                borderRadius: 10,

                px: 12,
                py: 6,
            },
        },
        error: {
            true: {
                borderColor: 'red',
                borderWidth: 1,
                borderStyle: 'solid',
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
            disabled: {},
        },
        error: {
            true: {},
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

export const ErrorMessage = styled('p', {
    fontSize: 10,
    color: 'red',
    marginTop: 4,
});

export const ErrorBox = styled('div', {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
});
