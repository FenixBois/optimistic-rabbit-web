import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Button, Select } from 'components/UI';

export function DashboardSearchBarForm() {
    const { control, handleSubmit, register, setValue } = useForm({ mode: 'onChange' });

    const options = [
        {
            id: 1,
            description: 'Select 1',
        },
        {
            id: 2,
            description: 'Select 2',
        },
        {
            id: 3,
            description: 'Select 3',
        },
    ];

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Select
                        {...register('selected')}
                        defaultValue={options[0].description}
                        onValueChange={value => setValue('selected', value)}
                    ></Select>
                    <Button type={'primary'}>ASDASDASD</Button>
                </div>
            </form>
            <DevTool control={control} />
        </>
    );
}
