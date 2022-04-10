import * as SwitchPrimitive from '@radix-ui/react-switch';
import type { ReactNode } from 'react';
import { useState } from 'react';

import { styled } from 'styles';

export interface SwitchProps {
    checkedIcon?: ReactNode;
    icon?: ReactNode;
}

const StyledSwitch = styled(SwitchPrimitive.Root, {
    all: 'unset',

    width: 80,
    height: 40,
    borderRadius: '9999px',
    position: 'relative',
    color: 'red',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    backgroundColor: '$amber3',
    '&[data-state="checked"]': { backgroundColor: '$amber7' },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,

    color: 'white',
    backgroundColor: '$amber11',
    borderRadius: '9999px',
    transition: 'transform 100ms',
    transform: 'translateX(5px)',
    willChange: 'transform',
    '&[data-state="checked"]': { transform: 'translateX(45px)' },
});

export const Switch = ({ icon, checkedIcon }: SwitchProps) => {
    const [checked, setChecked] = useState(false);
    const onChange = () => setChecked(!checked);

    return (
        <StyledSwitch onCheckedChange={onChange} checked={checked}>
            <StyledThumb>{icon ? (checked && checkedIcon ? checkedIcon : icon) : null}</StyledThumb>
        </StyledSwitch>
    );
};
