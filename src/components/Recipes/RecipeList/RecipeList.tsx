import { RecipeCard } from '../RecipeCard';
import { RecipeListBox } from './RecipeList.styles';
import { fetcher, serialize } from 'utils';
import useSWR from 'swr';
import { Recipe } from 'types';
import { api } from 'config';
import { Icon, IconButton, Modal, ModalContent, ModalTrigger } from 'components/UI';
import { RecipeDetail } from '../RecipeDetail';
import { useAtom } from 'jotai';
import { searchFilterAtom, tagFiltersAtom } from '../../Dashboard/atoms';
import Fuse from 'fuse.js';
import { useState } from 'react';

export const RecipeList = () => {
    const [searchFilter] = useAtom(searchFilterAtom);
    const [tagsFilters] = useAtom(tagFiltersAtom);
    const [modalShown, setModalShown] = useState(false);
    const { data: recipes, error } = useSWR<Recipe[]>(['recipes', serialize(tagsFilters)], () =>
        fetcher(`${api}/recipes`),
    );

    const options = {
        keys: ['name', 'reference'],
    };

    const fuse = new Fuse(recipes ? recipes : [], options);
    const result = fuse.search(searchFilter).map(item => item.item);

    if (error) return <div>failed to load</div>;
    if (!recipes) return <div>loading...</div>;

    const data = searchFilter ? result : recipes;
    console.log(modalShown);
    return (
        <RecipeListBox>
            {data.length > 0
                ? data.map(recipe => (
                      <Modal modal={modalShown} onOpenChange={setModalShown} key={recipe.id}>
                          <ModalContent
                              headerButtons={
                                  <IconButton>
                                      <Icon type={Icon.Types.COPY} />
                                  </IconButton>
                              }
                              title={recipe.name}
                          >
                              <RecipeDetail onClose={() => setModalShown(!modalShown)} recipe={recipe} />
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
