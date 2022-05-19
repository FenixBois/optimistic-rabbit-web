import { styled } from 'styles';
import { Content, Overlay } from '@radix-ui/react-dialog';
import { keyframes } from '@stitches/react';

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const StyledOverlay = styled(Overlay, {
    backgroundColor: '$overlayColor',
    position: 'fixed',
    inset: 0,

    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
});

export const Header = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textTransform: 'capitalize', // Makes the name of the recipe capitalized

    paddingBottom: 15,
});

export const DialogContent = styled(Content, {
    backgroundColor: '$appBackground',
    fontFamily: '$poppins',

    borderRadius: '$largeBorderRadius',
    boxShadow: '0px 0px 15px 0px #00000040',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: '90vw',
    maxWidth: '700px',
    maxHeight: '85vh',

    py: '33px',
    px: '45px',
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
    '&:focus': { outline: 'none' },
});
