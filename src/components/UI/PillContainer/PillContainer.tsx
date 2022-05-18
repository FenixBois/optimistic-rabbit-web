import { PillContainerStyled } from './PillContainer.styles';
import { Pill } from '../Pill';
import { Recipe } from 'types';

export interface PillContainerProps {
    recipe: Recipe;
}

export const PillContainer = ({ recipe }: PillContainerProps) => {
    const tags = [`${recipe?.time} minutes`, recipe?.difficulty, recipe?.taste, recipe?.media];

    return (
        <PillContainerStyled>
            {tags.map((tag, index) => (
                <Pill key={index}>{tag}</Pill>
            ))}
        </PillContainerStyled>
    );
};
