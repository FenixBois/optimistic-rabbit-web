import {styled} from 'styles';

export const ContainerStyled = styled('div', {
    width: '100%',
    boxSizing: 'border-box',

    borderRadius: 20,
    border: 'solid 4px $greyBorder',

    px: 20,
    py: 15,
});

export const PillContainerStyled = styled('div', {
    marginTop: 20,
    marginBottom: 5,
});
