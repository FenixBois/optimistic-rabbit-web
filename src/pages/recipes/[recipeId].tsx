import { useRouter } from 'next/router';
import { Recipe } from '../../types';
import { Modal, ModalContent } from '../../components/UI';
import { RecipeDetail } from '../../components/Recipes';
import useSWR from 'swr';
import { api } from '../../config';
import { fetcher } from '../../utils';

interface RecipePageTypeProps {
    recipe: Recipe;
}

const RecipePage = () => {
    const router = useRouter();
    const { recipeId } = router.query;
    console.log(recipeId);
    const { data: recipe, error } = useSWR<Recipe>(`${api}/recipe/${recipeId}`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!recipe) return <div>loading...</div>;

    return (
        <>
            <Modal open onOpenChange={() => router.push('/')}>
                <ModalContent title={recipe?.name}>
                    <RecipeDetail recipe={recipe} />
                </ModalContent>
            </Modal>
        </>
    );
};

export default RecipePage;
