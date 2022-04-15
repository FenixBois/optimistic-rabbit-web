import { styled } from 'styles';
import * as SelectRadix from '@radix-ui/react-Select';

export const SelectTrigger = styled(SelectRadix.Trigger, {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '$primaryElementBackground',
    borderRadius: '$inputBorderRadius',
    border: 'none',
    px: 15,
    height: 46,

    '&:focus': { boxShadow: `0 0 0 2px black` },
});

export const SelectContent = styled(SelectRadix.Content, {
    overflow: 'hidden',
    backgroundColor: '$primaryElementBackground',
    borderRadius: '$inputBorderRadius',
    boxShadow: '$dropdown',
});

export const StyledViewport = styled(SelectRadix.Viewport, {
    padding: 5,
});

export const StyledSelectItem = styled(SelectRadix.Item, {
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
