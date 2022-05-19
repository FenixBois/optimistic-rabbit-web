import { styled } from 'styles';

export const NewIngredientGroupStyled = styled('div', {});

export const Ingredient = styled('span', {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
    alignItems: 'flex-end',

    gap: 5,
});

export const ErrorMessage = styled('span', {
    color: 'red',
    fontSize: 12,
    marginLeft: 2,
    marginTop: 3,
});
