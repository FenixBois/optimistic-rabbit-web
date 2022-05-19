import { RecipeCard } from '../RecipeCard';
import { RecipeListBox } from './RecipeList.styles';
import { fetcher } from 'utils';
import useSWR from 'swr';
import { Recipe } from 'types';
import { api } from 'config';
import { Icon, IconButton, Modal, ModalContent, ModalTrigger } from 'components/UI';
import { RecipeDetail } from '../RecipeDetail';

interface RecipeListProps {}

export const RecipeList = () => {
    const { data: recipes, error, mutate } = useSWR<Recipe[]>(`${api}/recipes`, fetcher);
    if (error) return <div>failed to load</div>;
    if (!recipes) return <div>loading...</div>;

    return (
        <RecipeListBox>
            {recipes.length > 0
                ? recipes.map(recipe => (
                      <Modal key={recipe.id}>
                          <ModalContent
                              headerButtons={
                                  <IconButton>
                                      <Icon type={Icon.Types.COPY} />
                                  </IconButton>
                              }
                              title={recipe.name}
                          >
                              <RecipeDetail recipe={recipe} />
                          </ModalContent>
                          <ModalTrigger>
                              <RecipeCard recipe={recipe} />
                          </ModalTrigger>
                      </Modal>
                  ))
                : 'No data'}
        </RecipeListBox>
    );
};
