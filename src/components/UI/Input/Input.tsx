import type { InputHTMLAttributes, ReactNode } from 'react';
import { ErrorBox, ErrorMessage, InputStyled, InputWrapper, LabelWrapper, Prefix, Suffix } from './Input.styles';

import type { CSS, VariantProps } from '@stitches/react';
import type { Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Typography } from '../Typography';

type NativeInputAttributes = Pick<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export interface InputProps<TFormItem> extends VariantProps<typeof InputWrapper>, NativeInputAttributes {
    suffix?: ReactNode;
    prefix?: ReactNode;
    as?: 'textarea' | 'input';
    register?: UseFormRegister<TFormItem>;
    css?: CSS;
    htmlType?: 'text' | 'number' | 'submit';
    placeholder?: string;
    disabled?: boolean;
    id?: string;
    label?: string;
    rows?: number;
    error?: boolean;
    name?: Path<TFormItem>;
    rules?: RegisterOptions;
    errorMessage?: string;
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
    errorMessage,
    error = false,
    ...props
}: InputProps<TFormItem>) {
    return (
        <LabelWrapper>
            {label && (
                <Typography size="lg" weight="semibold" as={'label'}>
                    {label}
                </Typography>
            )}
            <ErrorBox>
                <InputWrapper css={css} error={!!errorMessage} type={disabled ? 'disabled' : type}>
                    {prefix ? <Prefix>{prefix}</Prefix> : null}

                    <InputStyled
                        color={type}
                        id={id}
                        rows={rows}
                        disabled={disabled}
                        placeholder={placeholder}
                        as={as}
                        {...(register && name && register(name, rules))}
                        {...props}
                        type={htmlType}
                    />
                    {suffix ? <Suffix>{suffix}</Suffix> : null}
                </InputWrapper>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </ErrorBox>
        </LabelWrapper>
    );
}
