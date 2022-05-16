import type { ReactNode } from 'react';
import { InputStyled, InputWrapper, Prefix, Suffix } from './Input.styles';

import type { CSS, VariantProps } from '@stitches/react';
import type { Path, UseFormRegister } from 'react-hook-form';

export interface InputProps<TFormItem> extends VariantProps<typeof InputWrapper> {
    suffix?: ReactNode;
    prefix?: ReactNode;
    as?: 'textarea' | 'input';
    register: UseFormRegister<TFormItem>;
    css?: CSS;
    placeholder?: string;
    disabled?: boolean;
    id?: string;
    name: Path<TFormItem>;
}

export function Input<TFormItem>({
    suffix,
    prefix,
    placeholder,
    disabled,
    register,
    type,
    id,
    css,
    as,
    name,
    ...props
}: InputProps<TFormItem>) {
    return (
        <InputWrapper type={disabled ? 'disabled' : type}>
            {prefix ? <Prefix>{prefix}</Prefix> : null}
            <InputStyled
                css={css}
                type={type}
                id={id}
                disabled={disabled}
                placeholder={placeholder}
                as={as}
                {...register(name)}
                {...props}
            />
            {suffix ? <Suffix>{suffix}</Suffix> : null}
        </InputWrapper>
    );
}
