import { PillContainerStyled } from './PillContainer.styles';
import { Pill } from '../Pill';
import { Recipe } from 'types';
import { CSS } from '@stitches/react';

export interface PillContainerProps {
    recipe: Recipe;
    css?: CSS;
}

export const PillContainer = ({ recipe, css }: PillContainerProps) => {
    const tags = [`${recipe?.time} minutes`, recipe?.difficulty, recipe?.taste, recipe?.media];
    if (recipe?.vegetarian) {
        tags.push('Vegetarian');
    }

    return (
        <PillContainerStyled css={css}>
            {tags.map((tag, index) => (
                <Pill key={index}>{tag}</Pill>
            ))}
        </PillContainerStyled>
    );
};
