import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { FormInput } from 'components/Form';
import { Button } from '@nextui-org/react';

export function DashboardSearchBarForm() {
    const { control, handleSubmit, formState } = useForm({ mode: 'onChange' });
    console.log(formState);
    const onSubmit = (e: any) => {
        console.log(e);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput control={control} name={'search'} />
            <DevTool control={control} />
            <Button type={'submit'}>Submit</Button>
        </form>
    );
}
