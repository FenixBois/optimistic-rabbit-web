const ingredients = [
    // generate ingredients with name, amount and unit (kg, ml, piece)
    {
        id: 1,
        name: 'tomato',
        amount: 1,
        unit: 'g',
    },
    {
        id: 2,
        name: 'potato',
        amount: 1,
        unit: 'ml',
    },
    {
        id: 3,
        name: 'carrot',
        amount: 1,
        unit: 'piece',
    },
];

export const RECIPE = {
    id: 1,
    name: 'Svíčková koláčová salátová saláta',
    description:
        'Lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos! Lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!Lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!Lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!Lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!Lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos!Lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos! ',
    servings: 1,
    time: 90, // in minutes
    reference: 'Pelíšky',
    difficulty: 'Hard',
    media: 'Movie',
    taste: 'Salty',
    vegetarian: false,
    ingredients,
};
