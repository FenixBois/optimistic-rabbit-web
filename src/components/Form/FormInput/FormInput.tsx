import type { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Input } from '@nextui-org/react';

interface FormInputProps {
    label?: string;
    name: string;
    placeholder?: string;
    type?: string;
    value?: string;
    control: Control;
}

export const FormInput = ({ control, name, label, placeholder, type = 'text' }: FormInputProps) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                         field: { onChange, onBlur, name },

                     }) => <Input onBlur={onBlur} name={name} onChange={onChange} type={type}
                                  placeholder={placeholder} label={label} />}
        />
    );
};
