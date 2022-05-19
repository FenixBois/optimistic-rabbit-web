import type { FC } from 'react';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';

import { ArrowDown, ArrowUp, Close, Copy, Minus, MoonIcon, Plus, SearchIcon, SunIcon } from './Icons';
import { IconBox } from './Icon.styles';
import { Check } from './Icons/Check';

export enum Types {
    MOON_ICON = 'moonIcon',
    SEARCH_ICON = 'searchIcon',
    SUN_ICON = 'sunIcon',
    ARROW_DOWN = 'arrowDown',
    ARROW_UP = 'arrowUp',
    MINUS = 'minus',
    CLOSE = 'close',
    PLUS = 'plus',
    COPY = 'copy',
    CHECK = 'check',
}

const assertIconExists = (type: never): void => console.warn(`Unknown icon type '${type}'`);

const getIcon = (type: Types) => {
    switch (type) {
        case Types.MOON_ICON:
            return MoonIcon;
        case Types.SEARCH_ICON:
            return SearchIcon;
        case Types.SUN_ICON:
            return SunIcon;
        case Types.ARROW_DOWN:
            return ArrowDown;
        case Types.ARROW_UP:
            return ArrowUp;
        case Types.CLOSE:
            return Close;
        case Types.MINUS:
            return Minus;
        case Types.PLUS:
            return Plus;
        case Types.COPY:
            return Copy;
        case Types.CHECK:
            return Check;

        default:
            assertIconExists(type);
    }
};

export interface IconProps {
    type: Types;
    size?: 'small' | 'medium' | 'large';
    label?: string;
}

export const Icon: FC<IconProps> & { Types: typeof Types } = ({ type, size = 'medium', label = '' }) => {
    const IconComponent = getIcon(type);

    return IconComponent ? (
        <IconBox size={size}>
            <AccessibleIcon label={label}>
                <IconComponent />
            </AccessibleIcon>
        </IconBox>
    ) : null;
};

Icon.Types = Types;
