import { styled } from 'styles';
import { ListboxButton, ListboxInput, ListboxList, ListboxOption, ListboxPopover } from '@reach/listbox';

export const SelectInput = styled(ListboxInput, {
    height: '$input',

    '& [data-reach-listbox-button]': {
        display: 'flex',
        width: 'auto',

        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        border: 'none',
        height: '100%',
        fontSize: '$buttonText',
    },
    ':focus-visible': {
        outlineColor: '$primaryHighContrastText',
    },

    variants: {
        type: {
            primary: {
                '& [data-reach-listbox-button]': {
                    backgroundColor: '$primaryElementBackground',
                    color: '$primaryLowContrastText',
                    fontWeight: '$semibold',

                    py: 22,
                    px: 15,

                    borderRadius: '$inputBorderRadius',

                    '&:hover': {
                        backgroundColor: '$primaryElementHover',
                    },
                },
            },
            secondary: {
                '& [data-reach-listbox-button]': {
                    backgroundColor: '$greyElementBackground',
                    color: '$highContrastText',
                    fontWeight: '$regular',
                    fontSize: '$md',
                    height: '$input',

                    px: 10,

                    borderRadius: '$smallInputBorderRadius',

                    '&:hover': {
                        backgroundColor: '$greyElementHover',
                    },
                },
            },
        },
    },
    defaultVariants: {
        type: 'primary',
    },
});

export const SelectBody = styled(ListboxPopover, {
    marginTop: 5,
    borderRadius: '$inputBorderRadius',
    minWidth: 'fit-content',
    boxShadow: '0px 0px 15px 0px #00000040',


    ':focus-visible': {
        outline: 'none',
    },


    variants: {
        type: {
            primary: {
                backgroundColor: '$primaryElementBackground',
                color: '$primaryLowContrastText',
                fontWeight: '$semibold',

                '& [data-reach-listbox-option]': {
                    px: 15,
                    py: 15,
                },
            },
            secondary: {
                backgroundColor: '$greyElementBackground',
                color: '$highContrastText',

                '& [data-reach-listbox-option]': {
                    px: 10,
                    py: 10,
                },
            },
        },
    },
    defaultVariants: {
        type: 'primary',
    },
});

export const ListboxListStyled = styled(ListboxList, {
    padding: 0,
});

export const ListboxButtonStyled = styled(ListboxButton, {});

export const SelectItemStyled = styled(ListboxOption, {
    listStyleType: 'none',
    cursor: 'pointer',
    borderRadius: '$inputBorderRadius',

    variants: {
        type: {
            primary: {
                '&:hover': {
                    backgroundColor: '$primaryElementHover',
                },
            },
            secondary: {
                '&:hover': {
                    backgroundColor: '$greyElementHover',
                },
            },
        },
    },
    defaultVariants: {
        type: 'primary',
    },
});
