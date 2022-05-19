import { styled } from 'styles';

export const RecipeListBox = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginBottom: 50,
    width: '100%',
    textTransform: 'capitalize', // Makes the name of the recipe capitalized

    '& a': {
        textDecoration: 'none',
    },
});
