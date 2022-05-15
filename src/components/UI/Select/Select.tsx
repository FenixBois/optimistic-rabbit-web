import type {ReactNode} from 'react';
import {useState} from 'react';
import {Icon} from '../Icon';

import {AnimatePresence, motion} from 'framer-motion';

import {ListboxButtonStyled, ListboxListStyled, SelectBody, SelectInput, SelectItemStyled} from './Select.styles';
import {VariantProps} from '@stitches/react';
import {subMenuAnimate} from "./SelectAnimation";

interface SelectTypeProps extends VariantProps<typeof SelectInput> {
    children: ReactNode;
    onChange: (value: string) => void;
}

interface SelectItemTypeProps extends VariantProps<typeof SelectItemStyled> {
    value: string | 'default';
    children: ReactNode;
}

export const Select = ({
                           ref, children, type, onChange = () => {
    }
                       }: SelectTypeProps) => {
    const [value, setValue] = useState<string | null>(null);

    const subMenuAnimate = {
        enter: {
            opacity: 1,

            transition: {
                duration: 0.2,
            },
            display: 'block',
        },
        exit: {
            opacity: 0,

            transitionEnd: {
                duration: 0.2,

                display: 'none',
            },
        },
    };

    const SelectBodyAnimated = motion(SelectBody);

    const handleChange = (value: string) => {
        setValue(value);
        onChange(value);
    };

    return (

        <SelectInput

            type={type} value={value ?? 'default'} onChange={handleChange} ref={ref}
        >
            {({valueLabel, isExpanded}) => (
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
                        {value ? valueLabel : 'Difficulty'}
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
    );
};

export const SelectItem = ({children, value, type}: SelectItemTypeProps) => {
    return <SelectItemStyled value={value} type={type}>{children}</SelectItemStyled>;
};
