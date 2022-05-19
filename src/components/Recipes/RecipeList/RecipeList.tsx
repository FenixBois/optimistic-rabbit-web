import { RecipeCard } from '../RecipeCard';
import { NoSearchResults, RecipeListBox } from './RecipeList.styles';
import { fetcher, serialize } from 'utils';
import useSWR from 'swr';
import { Recipe } from 'types';
import { api } from 'config';
import { Icon, IconButton, Modal, ModalContent, ModalTrigger, Typography } from 'components/UI';
import { RecipeDetail } from '../RecipeDetail';
import { useAtom } from 'jotai';
import { searchFilterAtom, tagFiltersAtom } from '../../Dashboard/atoms';
import Fuse from 'fuse.js';
import { useEffect, useState } from 'react';

export const RecipeList = () => {
    const [searchFilter] = useAtom(searchFilterAtom);
    const [tagsFilters] = useAtom(tagFiltersAtom);
    const [modalShown, setModalShown] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const { data: recipes, error } = useSWR<Recipe[]>(['recipes', serialize(tagsFilters)], () =>
        fetcher(`${api}/recipes/?`, serialize(tagsFilters)),
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCopied(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [isCopied]);

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
            {data.length > 0 ? (
                data.map(recipe => (
                    <Modal modal={modalShown} onOpenChange={setModalShown} key={recipe.id}>
                        <ModalContent
                            headerButtons={
                                <IconButton
                                    onClick={() => {
                                        setIsCopied(true);
                                        navigator.clipboard.writeText(`${window.location}recipes/${recipe.id}`);
                                    }}
                                >
                                    <Icon type={isCopied ? Icon.Types.ARROW_DOWN : Icon.Types.COPY} />
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
            ) : (
                <NoSearchResults>
                    <Icon type={Icon.Types.SEARCH_ICON} size={'large'} />
                    <Typography size={'xl'} weight={'semibold'} color={'lowContrast'}>
                        Sorry we couldnt find anything.
                    </Typography>
                </NoSearchResults>
            )}
        </RecipeListBox>
    );
};
