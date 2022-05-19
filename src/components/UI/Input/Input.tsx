import type { ReactNode } from 'react';
import { InputStyled, InputWrapper, LabelWrapper, Prefix, Suffix } from './Input.styles';

import type { CSS, VariantProps } from '@stitches/react';
import type { Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Typography } from '../Typography';

export interface InputProps<TFormItem> extends VariantProps<typeof InputWrapper> {
    suffix?: ReactNode;
    prefix?: ReactNode;
    as?: 'textarea' | 'input';
    register: UseFormRegister<TFormItem>;
    css?: CSS;
    htmlType?: 'text' | 'number' | 'submit';
    placeholder?: string;
    disabled?: boolean;
    id?: string;
    label?: string;
    rows?: number;
    name: Path<TFormItem>;
    rules?: RegisterOptions;
}

export function Input<TFormItem>({
    suffix,
    prefix,
    placeholder,
    disabled,
    register,
    htmlType = 'text',
    type,
    rules,
    id,
    label,
    css,
    as,
    rows,
    name,
    ...props
}: InputProps<TFormItem>) {
    return (
        <LabelWrapper>
            {label && (
                <Typography size="lg" weight="semibold" as={'label'}>
                    {label}
                </Typography>
            )}
            <InputWrapper type={disabled ? 'disabled' : type}>
                {prefix ? <Prefix>{prefix}</Prefix> : null}
                <InputStyled
                    css={css}
                    color={type}
                    id={id}
                    rows={rows}
                    disabled={disabled}
                    placeholder={placeholder}
                    as={as}
                    {...register(name, rules)}
                    {...props}
                    type={htmlType}
                />
                {suffix ? <Suffix>{suffix}</Suffix> : null}
            </InputWrapper>
        </LabelWrapper>
    );
}
