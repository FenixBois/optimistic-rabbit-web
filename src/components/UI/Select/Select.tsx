import * as SelectRadix from '@radix-ui/react-Select';

import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import { SelectContent, SelectTrigger, StyledSelectItem, StyledViewport } from './Select.styles';

export interface SelectTypesProps {
    children: ReactNode;
    defaultValue: string;
    onValueChange: (value: string) => void;
}

export interface SelectItemTypesProps {
    children: ReactNode;
    value: string;
}

type SelectItemRef = HTMLDivElement;
type SelectRef = HTMLSelectElement;

export const Select = forwardRef<SelectRef, SelectTypesProps>(
    ({ children, defaultValue, onValueChange, ...props }, ref) => {
        return (
            <SelectRadix.Root onValueChange={onValueChange} defaultValue={defaultValue} {...props}>
                <SelectTrigger>
                    <SelectRadix.Value />
                </SelectTrigger>

                <SelectContent>
                    <StyledViewport>{children}</StyledViewport>
                </SelectContent>
            </SelectRadix.Root>
        );
    },
);

Select.displayName = 'Select';

export const SelectItem = forwardRef<SelectItemRef, SelectItemTypesProps>(
    ({ children, value, ...props }, forwardedRef) => {
        return (
            <StyledSelectItem value={value} {...props} ref={forwardedRef}>
                <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
            </StyledSelectItem>
        );
    },
);

SelectItem.displayName = 'SelectItem';
