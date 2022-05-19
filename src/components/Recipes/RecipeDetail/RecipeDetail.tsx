import { Button, PillContainer, Stepper, Typography } from 'components/UI';
import { DirectionsStyled, IngredientListStyled, IngredientsStyled, RecipeDetailStyled } from './RecipeDetail.styles';
import { useState } from 'react';
import { Recipe } from 'types';
import { api } from 'config';
import useSWR from 'swr';
import { fetcher, serialize } from 'utils';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { tagFiltersAtom } from '../../Dashboard/atoms';
import { toast } from 'react-hot-toast';

interface RecipeDetailProps {
    recipe: Recipe;
    onClose?: () => void;
}

export const RecipeDetail = ({ recipe, onClose }: RecipeDetailProps) => {
    const [tagsFilters] = useAtom(tagFiltersAtom);

    const {
        data: recipes,
        error,
        mutate,
    } = useSWR<Recipe[]>(['recipes', serialize(tagsFilters)], () =>
        fetcher(`${api}/recipes/?`, serialize(tagsFilters)),
    );
    const router = useRouter();

    const onDelete = async (recipeId: Recipe['id']) => {
        const deleteRecipe = () => {
            return fetch(`${api}/recipe/${recipeId}`, {
                method: 'DELETE',
            });
        };

        await toast.promise(
            deleteRecipe(),
            {
                loading: 'Loading',
                success: 'Deleted',
                error: 'Error when deleting',
            },
            {
                position: 'top-right',
            },
        );
        await mutate();
        onClose ? onClose() : await router.push('/', undefined, { scroll: false });
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
            <Button onClick={() => onDelete(recipe.id)} css={{ alignSelf: 'start' }} color={'danger'}>
                Delete recipe
            </Button>
        </RecipeDetailStyled>
    );
};
