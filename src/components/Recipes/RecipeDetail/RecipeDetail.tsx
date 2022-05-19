import { Button, PillContainer, Stepper, Typography } from 'components/UI';
import { DirectionsStyled, IngredientListStyled, IngredientsStyled, RecipeDetailStyled } from './RecipeDetail.styles';
import { SyntheticEvent, useState } from 'react';
import { Recipe } from 'types';
import { api } from 'config';
import useSWR from 'swr';
import { fetcher } from 'utils';
import { useRouter } from 'next/router';

interface RecipeDetailProps {
    recipe: Recipe;
}

export const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
    const { data: recipes, mutate } = useSWR<Recipe[]>(`${api}/recipes`, fetcher);

    const router = useRouter();

    const onDelete = async (e: SyntheticEvent, recipeId: Recipe['id']) => {
        e.preventDefault();

        await fetch(`${api}/recipe/${recipeId}`, {
            method: 'DELETE',
        });
        if (recipes) {
            await mutate(recipes.filter(recipe => recipe.id !== recipeId));
        }
        await router.push('/', undefined, { scroll: false });
    };
    const [servings, setServings] = useState(1);

    return (
        <RecipeDetailStyled>
            <div>
                <PillContainer recipe={recipe} />
            </div>
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
            <Button onClick={e => onDelete(e, recipe.id)} css={{ alignSelf: 'start' }} color={'danger'}>
                Delete recipe
            </Button>
        </RecipeDetailStyled>
    );
};
