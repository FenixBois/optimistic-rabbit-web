import { styled } from 'styles';

export const Container = styled('div', {});

export const RecipeDetailStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
});

export const DirectionsStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,

    padding: 20,
    backgroundColor: '$primaryElementBackground',
    borderRadius: '$largeBorderRadius',
});

export const IngredientsStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
});

export const IngredientListStyled = styled('ol', {
    color: '$highContrastText',
    listStyle: 'disc',
    paddingLeft: 20,
});
