import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Button, Input } from '@nextui-org/react';
import { SearchIcon } from 'components/Icons';
import { Select } from 'components/UI';

export function DashboardSearchBarForm() {
    const { control, handleSubmit, formState, register } = useForm({ mode: 'onChange' });
    console.log(formState);
    const onSubmit = (e: any) => {
        console.log(e);
    };

    const selectData = [
        {
            value: 'item1',
            text: 'Item One',
        },
        {
            value: 'item2',
            text: 'Item Two',
        },
    ];

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('searchText')}
                    clearable
                    contentRightStyling={false}
                    placeholder="Zadejte hledaný výraz"
                    contentRight={
                        <Button auto color="primary" className="ml-2">
                            Search <SearchIcon size={16} />
                        </Button>
                    }
                />
                <div>
                    <Select selectData={selectData} />
                </div>
            </form>
            <DevTool control={control} />
        </>
    );
}
