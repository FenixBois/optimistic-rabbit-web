import type { DifficultyType, MediaType, TasteType } from 'types';
import { Difficulty, Media, RecipeUnits, TagsNames, Taste } from 'types';

export interface CreateRecipeFormValues extends TagValue {
    name: string;
    time: number;

    ingredients: IngredientValue[];
    description: string;
}

export interface TagValue {
    difficulty: DifficultyType;
    taste: TasteType;
    media: MediaType;
}

export interface IngredientValue {
    name: string;
    amount: string;
    unit: RecipeUnits;
}

export const TagsData = [
    {
        id: 1,
        defaultValue: 'Difficulty',
        options: Object.entries(Difficulty),
        name: TagsNames.Difficulty,
    },
    {
        id: 2,
        defaultValue: 'Taste',
        options: Object.entries(Taste),
        name: TagsNames.Taste,
    },
    {
        id: 3,
        defaultValue: 'Media',
        options: Object.entries(Media),
        name: TagsNames.Media,
    },
];
