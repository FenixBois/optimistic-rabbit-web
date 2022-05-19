import { Button, PillContainer, Stepper, Typography } from 'components/UI';
import { DirectionsStyled, IngredientListStyled, IngredientsStyled, RecipeDetailStyled } from './RecipeDetail.styles';
import { useState } from 'react';
import { Recipe } from 'types';

interface RecipeDetailProps {
    recipe: Recipe;
}

export const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
    const [servings, setServings] = useState(1);
    return (
        <RecipeDetailStyled>
            <PillContainer recipe={recipe} />
            <IngredientsStyled>
                <Typography size={'xl'} weight={'semibold'}>
                    Ingredients
                </Typography>
                <Stepper
                    label={'Number of servings'}
                    count={servings}
                    onIncrease={() => setServings(servings + 1)}
                    onDecrease={() => setServings(servings - 1)}
                />
                <IngredientListStyled>
                    {recipe.ingredients &&
                        recipe.ingredients.map(ingredient => (
                            <li key={ingredient.id}>
                                <Typography>
                                    {ingredient.name} - {ingredient.amount * servings} {ingredient.unit}
                                </Typography>
                            </li>
                        ))}
                </IngredientListStyled>
            </IngredientsStyled>
            <DirectionsStyled>
                <Typography size={'xl'} weight={'semibold'}>
                    Directions
                </Typography>
                <Typography size={'md'} weight={'regular'} color={'primaryHighContrast'}>
                    {recipe.description}
                </Typography>
            </DirectionsStyled>
            <Button css={{ alignSelf: 'start' }} color={'danger'}>
                Delete recipe
            </Button>
        </RecipeDetailStyled>
    );
};
