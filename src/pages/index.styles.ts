import {styled} from 'styles';

export const PageContainerStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& > *:first-child': {
        marginBottom: 50,
    },

    '@sm': {
        width: '100%',
        mx: '40px',
    },
    '@md': {
        width: '100%',
        mx: '80px'
    },
    '@lg': {
        width: '860px',
    },
})
