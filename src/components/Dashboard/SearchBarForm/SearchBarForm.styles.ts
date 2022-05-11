import {styled} from 'styles';

export const MainInputStyled = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    '& > *:first-child': { // Allows input to fill the remaining space
        flexGrow: 1,
        marginRight: '20px',
    },
})

export const SearchBarFormStyled = styled('form', {
    width: '100%',
})

export const SelectContainerStyled = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
    '& > *': {
        marginRight: '10px',
    }
})
