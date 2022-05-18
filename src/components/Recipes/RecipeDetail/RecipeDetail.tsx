import { Stepper, Typography } from 'components/UI';
import { RECIPE } from './RecipeDetailData';
import { DirectionsStyled, IngredientListStyled, IngredientsStyled, RecipeDetailStyled } from './RecipeDetail.styles';
import { useState } from 'react';
import { PillContainer } from '../../UI/PillContainer';

interface RecipeDetailProps {}

export const RecipeDetail = () => {
    const [servings, setServings] = useState(1);

    return (
        <RecipeDetailStyled>
            <PillContainer recipe={RECIPE} />
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
                    {RECIPE.ingredients.map(ingredient => (
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
                    {RECIPE.description}
                </Typography>
            </DirectionsStyled>
        </RecipeDetailStyled>
    );
};
