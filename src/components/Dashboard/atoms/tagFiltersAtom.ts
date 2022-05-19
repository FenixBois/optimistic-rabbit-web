import { atom } from 'jotai';
import type { TagValue } from '../../Recipes/CreateRecipeModal/CreateRecipeForm/types';

export const tagFiltersAtom = atom<Partial<TagValue>>({});
