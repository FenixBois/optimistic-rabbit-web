import { styled } from 'styles';

export const ContainerStyled = styled('div', {
    width: '100%',
    boxSizing: 'border-box',

    textAlign: 'start',
    textTransform: 'capitalize',

    borderRadius: 20,
    border: 'solid 4px $greyBorder',

    px: 20,
    py: 15,

    '&:hover': {
        cursor: 'pointer',
        border: 'solid 4px $greyBorderHover',
    },
});
