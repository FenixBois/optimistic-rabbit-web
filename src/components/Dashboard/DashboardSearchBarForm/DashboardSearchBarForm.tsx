import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Button, Input } from '@nextui-org/react';
import { SearchIcon } from 'components/Icons';

export function DashboardSearchBarForm() {
    const { control, handleSubmit, formState, register } = useForm({ mode: 'onChange' });
    console.log(formState);
    const onSubmit = (e: any) => {
        console.log(e);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('example')}
                    clearable
                    contentRightStyling={false}
                    placeholder="Zadejte hledaný výraz"
                    contentRight={
                        <Button auto color="primary" className="ml-2">
                            Search <SearchIcon size={16} />
                        </Button>
                    }
                />
            </form>
            <DevTool control={control} />
        </>
    );
}
