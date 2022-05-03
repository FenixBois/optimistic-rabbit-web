import { Pill, Typography } from 'components/UI';
import { ContainerStyled, PillContainerStyled } from './RecipeCard.styles';

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
            <PillContainerStyled>
                {tags.map(tag => (
                    <Pill key={tag.id}>{tag.type}</Pill>
                ))}
            </PillContainerStyled>
        </ContainerStyled>
    );
};
