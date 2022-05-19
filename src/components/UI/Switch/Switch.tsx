import * as SwitchPrimitive from '@radix-ui/react-switch';
import type { ReactNode } from 'react';
import { useState } from 'react';

import { styled } from 'styles';

export interface SwitchProps {
    iconOn?: ReactNode;
    iconOff?: ReactNode;
}

const StyledSwitch = styled(SwitchPrimitive.Root, {
    all: 'unset',

    width: 102,
    height: '$input',
    borderRadius: '$smallInputBorderRadius',
    position: 'relative',
    color: 'red',
    backgroundColor: '$primaryElementBackground',
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '$input',
    width: 45,

    transition: 'transform 100ms',
    transform: 'translateX(5px)',
    willChange: 'transform',

    color: '$primaryHighContrastText',
    backgroundColor: '$primarySolid',
    borderRadius: '$smallInputBorderRadius',
    '&[data-state="checked"]': { transform: 'translateX(52px)' },
});

export const Switch = ({ iconOn, iconOff }: SwitchProps) => {
    const [checked, setChecked] = useState(false);
    const onChange = () => setChecked(!checked);

    return (
        <StyledSwitch onCheckedChange={onChange} checked={checked}>
            <StyledThumb>{iconOff ? (checked && iconOn ? iconOn : iconOff) : null}</StyledThumb>
        </StyledSwitch>
    );
};
