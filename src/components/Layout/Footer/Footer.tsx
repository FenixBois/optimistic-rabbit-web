import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { SunIcon, MoonIcon } from 'components/Icons';

interface FooterProps {}

export function Footer({}: FooterProps) {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    return (
        <footer className="absolute bottom-5 right-5">
            <Switch
                size="xl"
                checked={isDark}
                iconOn={<SunIcon />}
                iconOff={<MoonIcon />}
                onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
            />
        </footer>
    );
}
