import {styled} from 'styles';

export const NewIngredientGroupStyled = styled('div', {});

export const Ingredient = styled('span', {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',

    '& > *': {
        marginRight: 5,
    },
});
