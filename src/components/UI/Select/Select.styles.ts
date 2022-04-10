import { styled } from 'styles';
import * as SelectRadix from '@radix-ui/react-Select';

export const SelectTrigger = styled(SelectRadix.Trigger, {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 15px',
    fontSize: 13,
    lineHeight: 1,
    height: 35,
    gap: 5,
    backgroundColor: 'white',
    '&:focus': { boxShadow: `0 0 0 2px black` },
});

export const SelectContent = styled(SelectRadix.Content, {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const StyledViewport = styled(SelectRadix.Viewport, {
    padding: 5,
});

export const StyledSelectItem = styled(SelectRadix.Item, {
    all: 'unset',
    fontSize: 13,
    lineHeight: 1,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '0 35px 0 25px',
    position: 'relative',
    userSelect: 'none',

    '&[data-disabled]': {
        pointerEvents: 'none',
    },

    '&:focus': {
        color: 'red',
    },
});
