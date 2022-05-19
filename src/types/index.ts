export interface Recipe {
    name: string;
    id: string;
    description: string;
    servings: number;
    time: number;
    reference: string;
    difficulty: DifficultyType;
    media: MediaType;
    taste: TasteType;
    vegetarian: boolean;
    ingredients: Ingredients[];
}

interface Ingredients {
    id: string;
    name: string;
    amount: number;
    unit: RecipeUnits;
    recipe: Ingredients['id'];
    recipesId: string;
}

export const Difficulty = {
    Easy: 'easy',
    Medium: 'medium',
    Hard: 'hard',
} as const;

export type DifficultyType = typeof Difficulty[keyof typeof Difficulty];

export const Taste = {
    Sweet: 'sweet',
    Bitter: 'bitter',
    Spicy: 'spicy',
    Sour: 'sour',
    Salty: 'salty',
} as const;

export type TasteType = typeof Taste[keyof typeof Taste];

export const Media = {
    Movie: 'movie',
    Book: 'book',
    Game: 'game',
} as const;

export type MediaType = typeof Media[keyof typeof Media];

export const RecipeUnits = {
    ml: 'ml',
    g: 'g',
    pieces: 'pieces',
} as const;

export type RecipeUnits = typeof RecipeUnits[keyof typeof RecipeUnits];

export const TagsNames = {
    Difficulty: 'difficulty',
    Taste: 'taste',
    Media: 'media',
} as const;
