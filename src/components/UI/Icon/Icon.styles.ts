import { styled } from 'styles';

export const IconBox = styled('span', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    variants: {
        size: {
            small: {
                width: 12,
                height: 12,
            },
            medium: {
                width: 20,
                height: 20,
            },
            large: {
                width: 32,
                height: 32,
            },
            '&  svg': {
                width: '100%',
                height: '100%',
            },
        },
    },
});
