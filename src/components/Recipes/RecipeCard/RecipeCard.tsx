import { PillContainer, Typography } from 'components/UI';
import { ContainerStyled } from './RecipeCard.styles';
import { Recipe } from 'types';

interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
    return (
        <ContainerStyled>
            <Typography size={'xl'} weight={'semibold'}>
                {recipe?.name}
            </Typography>
            <PillContainer recipe={recipe} />
        </ContainerStyled>
    );
};
