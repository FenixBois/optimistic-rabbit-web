import { RecipeCard } from '../RecipeCard';
import { RecipeListBox } from './RecipeList.styles';
import Link from 'next/link';
import { fetcher } from 'utils';
import useSWR from 'swr';
import { Recipe } from 'types';
import { api } from 'config';

interface RecipeListProps {}

export const RecipeList = () => {
    const { data, error } = useSWR<Recipe[]>(`${api}/recipes`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return (
        <RecipeListBox>
            {data.map(recipe => (
                <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
                    <a>
                        <RecipeCard recipe={recipe} />
                    </a>
                </Link>
            ))}
        </RecipeListBox>
    );
};
