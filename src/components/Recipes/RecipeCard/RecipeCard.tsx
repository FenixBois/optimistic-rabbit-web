import { Typography } from 'components/UI';
import { ContainerStyled } from './RecipeCard.styles';
import { PillContainer } from '../../UI/PillContainer';
import { RECIPE } from 'components/Recipes/RecipeDetail/RecipeDetailData';

interface RecipeCard {}

export const RecipeCard = () => {
    const tags = [
        {
            id: 1,
            type: 'Select 1',
        },
        {
            id: 2,
            type: 'Select 2',
        },
        {
            id: 3,
            type: 'Select 3',
        },
    ];

    return (
        <ContainerStyled>
            <Typography size={'xl'} weight={'semibold'}>
                Very epic recipe name
            </Typography>
            <PillContainer recipe={RECIPE} />
        </ContainerStyled>
    );
};
