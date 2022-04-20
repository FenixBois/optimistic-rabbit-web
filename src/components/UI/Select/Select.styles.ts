import { styled } from 'styles';
import * as SelectRadix from '@radix-ui/react-Select';

export const SelectTrigger = styled(SelectRadix.Trigger, {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    py: 8,
    px: 30,
    lineHeight: 1,
    height: 35,
    gap: 5,

    fontSize: '$buttonText',
    fontWeight: '$semibold',

    backgroundColor: '$primaryElementBackground',
    color: '$primaryLowContrastText',
    // '&:focus': { boxShadow: `0 0 0 2px black` },
});

export const SelectContent = styled(SelectRadix.Content, {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 8,
    boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const StyledViewport = styled(SelectRadix.Viewport, {
    padding: 5,
});

export const StyledSelectItem = styled(SelectRadix.Item, {
    all: 'unset',
    lineHeight: 1,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    py: 8,
    px: 30,
    position: 'relative',
    userSelect: 'none',

    fontSize: '$buttonText',
    fontWeight: '$semibold',

    backgroundColor: '$primaryElementBackground',
    color: '$primaryLowContrastText',

    '&[data-disabled]': {
        pointerEvents: 'none',
    },

    '&:focus': {
        color: '$highContrastText',
    },
});
