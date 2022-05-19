import { styled } from 'styles';

export const SearchInputBox = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: 25,
    justifyContent: 'space-between',

    '& > div': {
        flexGrow: 1,
    },
});

export const SearchBar = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    width: '100%',
});

export const SelectContainerStyled = styled('form', {
    display: 'flex',
    marginTop: 10,
    gap: 10,
});
