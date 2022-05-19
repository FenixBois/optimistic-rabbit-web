import { styled } from 'styles';

export const StepperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignSelf: 'start',

    alignItems: 'center',
    backgroundColor: '$primaryElementBackground',

    paddingLeft: 15,
    paddingRight: 2,
    borderRadius: 7,
});
