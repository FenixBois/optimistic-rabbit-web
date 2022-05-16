import type { ReactNode } from 'react';
import { Icon } from '../Icon';
import { Control, Controller } from 'react-hook-form';

import { AnimatePresence, motion } from 'framer-motion';

import { ListboxButtonStyled, ListboxListStyled, SelectBody, SelectInput, SelectItemStyled } from './Select.styles';
import { VariantProps } from '@stitches/react';
import { subMenuAnimate } from './SelectAnimation';

interface SelectTypeProps extends VariantProps<typeof SelectInput> {
    children: ReactNode;
    name: string;
    control: Control;
    defaultValue?: string;
}

interface SelectItemTypeProps extends VariantProps<typeof SelectItemStyled> {
    value: string | 'default';
    children: ReactNode;
}

export function Select({ control, children, defaultValue, type, name }: SelectTypeProps) {
    const SelectBodyAnimated = motion(SelectBody);

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value, name, ref } }) => (
                <SelectInput type={type} value={value} name={name} onChange={onChange} ref={ref}>
                    {({ valueLabel, isExpanded }) => (
                        <>
                            <ListboxButtonStyled
                                arrow={
                                    isExpanded ? (
                                        <Icon
                                            label={'close menu'}
                                            size={type === 'primary' ? 'large' : 'medium'}
                                            type={Icon.Types.ARROW_UP}
                                        />
                                    ) : (
                                        <Icon
                                            label={'open menu'}
                                            size={type === 'primary' ? 'large' : 'medium'}
                                            type={Icon.Types.ARROW_DOWN}
                                        />
                                    )
                                }
                            >
                                {value ? valueLabel : defaultValue}
                            </ListboxButtonStyled>
                            <AnimatePresence exitBeforeEnter={false} initial={false} onExitComplete={() => null}>
                                <SelectBodyAnimated
                                    initial="exit"
                                    type={type}
                                    animate={isExpanded ? 'enter' : 'exit'}
                                    variants={subMenuAnimate}
                                >
                                    <ListboxListStyled>{children}</ListboxListStyled>
                                </SelectBodyAnimated>
                            </AnimatePresence>
                        </>
                    )}
                </SelectInput>
            )}
        />
    );
}

export const SelectItem = ({ children, value, type }: SelectItemTypeProps) => {
    return (
        <SelectItemStyled value={value} type={type}>
            {children}
        </SelectItemStyled>
    );
};
