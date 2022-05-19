import type { ReactNode } from 'react';
import { Icon } from '../Icon';
import { Control, Controller, Path } from 'react-hook-form';

import { AnimatePresence, motion } from 'framer-motion';

import { ListboxButtonStyled, ListboxListStyled, SelectBody, SelectInput, SelectItemStyled } from './Select.styles';
import { VariantProps } from '@stitches/react';
import { subMenuAnimate } from './SelectAnimation';

interface SelectTypeProps<TFormValues> extends VariantProps<typeof SelectInput> {
    children: ReactNode;
    name: Path<TFormValues>;
    control: Control<TFormValues>;
    defaultValue?: string;
    onSelect?: () => void;
    errorMessage?: string;
}

interface SelectItemTypeProps extends VariantProps<typeof SelectItemStyled> {
    value: string | 'default';
    children: ReactNode;
}

export function Select<TFormValues>({
    control,
    children,
    defaultValue,
    onSelect,
    errorMessage,
    type,
    name,
}: SelectTypeProps<TFormValues>) {
    const SelectBodyAnimated = motion(SelectBody);

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, name, ref } }) => (
                <SelectInput
                    error={!!errorMessage}
                    type={type}
                    defaultValue={defaultValue}
                    onBlur={onBlur} // notify when input is touched
                    name={name}
                    onChange={e => {
                        onChange(e);
                        onSelect && onSelect();
                    }}
                    ref={ref}
                >
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
                                {valueLabel}
                            </ListboxButtonStyled>
                            <AnimatePresence exitBeforeEnter={false} initial={false} onExitComplete={() => null}>
                                <SelectBodyAnimated
                                    portal={false}
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
