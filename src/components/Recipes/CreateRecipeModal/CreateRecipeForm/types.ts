export interface CreateRecipeFormValues extends TagValue {
    title: string;
    timeToPrepare: number;

    ingredients: IngredientValue[];
    instructions: string;
}

export interface TagValue {
    difficulty: Difficulty;
    taste: Taste;
    media: Media;
}

export interface IngredientValue {
    name: string;
    amount: string;
    unit: RecipeUnits;
}

const Difficulty = {
    Easy: 'easy',
    Normal: 'normal',
    Hard: 'hard',
} as const;

type Difficulty = typeof Difficulty[keyof typeof Difficulty];

const Taste = {
    Sweet: 'sweet',
    Bitter: 'bitter',
    Spicy: 'spicy',
    Sour: 'sour',
    Salt: 'salt',
} as const;

type Taste = typeof Taste[keyof typeof Taste];

const Media = {
    Movie: 'movie',
    Book: 'book',
    Game: 'game',
} as const;

type Media = typeof Media[keyof typeof Media];

const RecipeUnits = {
    ml: 'ml',
    g: 'g',
    pieces: 'pieces',
} as const;

type RecipeUnits = typeof RecipeUnits[keyof typeof RecipeUnits];

const TagsNames = {
    Difficulty: 'difficulty',
    Taste: 'taste',
    Media: 'media',
} as const;

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
