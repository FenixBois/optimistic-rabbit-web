import * as SelectRadix from '@radix-ui/react-Select';
import { Controller } from "react-hook-form";

interface SelectTypeProps {
    selectData: SelectItem[],
}

interface SelectItem {
    value: string,
    text: string,
}

export function Select({selectData} : SelectTypeProps) {
    return (
        <SelectRadix.Root defaultValue='empty'>
            <SelectRadix.Trigger>
                <SelectRadix.Value />
                <SelectRadix.Icon />
            </SelectRadix.Trigger>

            <SelectRadix.Content>
                <SelectRadix.Viewport>
                    {selectData.map((data) =>
                        <SelectRadix.Item value={data.value} key={data.value}>
                            <SelectRadix.ItemText>{data.text}</SelectRadix.ItemText>
                            <SelectRadix.ItemIndicator />
                        </SelectRadix.Item>
                    )}
                </SelectRadix.Viewport>
            </SelectRadix.Content>
        </SelectRadix.Root>
    );
}
