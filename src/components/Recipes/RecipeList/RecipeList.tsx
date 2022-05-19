import { RecipeCard } from '../RecipeCard';
import { RecipeListBox } from './RecipeList.styles';
import { fetcher } from 'utils';
import useSWR from 'swr';
import { Recipe } from 'types';
import { api } from 'config';
import { Icon, IconButton, Modal, ModalContent, ModalTrigger } from 'components/UI';
import { RecipeDetail } from '../RecipeDetail';
import { useAtom } from 'jotai';
import { searchFilterAtom } from '../../Dashboard/atoms';
import Fuse from 'fuse.js';

export const RecipeList = () => {
    const { data: recipes, error, mutate } = useSWR<Recipe[]>(`${api}/recipes`, fetcher);
    const [searchFilter] = useAtom(searchFilterAtom);
    const options = {
        keys: ['name', 'reference'],
    };

    const fuse = new Fuse(recipes ? recipes : [], options);
    const result = fuse.search(searchFilter).map(item => item.item);

    if (error) return <div>failed to load</div>;
    if (!recipes) return <div>loading...</div>;

    const data = searchFilter ? result : recipes;

    return (
        <RecipeListBox>
            {data.length > 0
                ? data.map(recipe => (
                      <Modal key={recipe.id}>
                          <ModalContent
                              headerButtons={
                                  <IconButton
                                      onClick={() =>
                                          navigator.clipboard.writeText(`${window.location}recipes/${recipe.id}`)
                                      }
                                  >
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
