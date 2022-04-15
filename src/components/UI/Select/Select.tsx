import { Listbox, ListboxOption, ListboxPopover } from '@reach/listbox';
import { styled } from '../../../styles';
import { useState } from 'react';

import '@reach/listbox/styles.css';
import { Icon } from '../Icon';

export const StyledListbox = styled(Listbox, {
    '& [data-reach-listbox-button]': {
        width: '100%',
        height: 46,
        border: 'none',
        backgroundColor: '$primaryElementBackground',
        borderRadius: '$inputBorderRadius',
    },
});

export const StyledListboxItem = styled(ListboxOption, {
    borderRadius: '$inputBorderRadius',
    border: 'none',
});

export const StyledListboxPopover = styled(ListboxPopover, {
    backgroundColor: '$primaryElementBackground',
    borderRadius: '$inputBorderRadius',
    padding: 0,
    border: 'none',
    width: '100%',
});

export const Select = () => {
    let [value, setValue] = useState('default');
    return (
        <>
            <StyledListbox
                arrow={<Icon type={Icon.Types.MOON_ICON} />}
                value={value}
                onChange={value => setValue(value)}
            >
                <StyledListboxItem value="default">🌮 Choose a taco</StyledListboxItem>
                <StyledListboxItem value="asada">🌮 Carne Asada</StyledListboxItem>
                <StyledListboxItem value="pollo">🌮 Pollo</StyledListboxItem>
            </StyledListbox>
        </>
    );
};
