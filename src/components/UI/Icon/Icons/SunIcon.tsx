import type { SVGAttributes } from 'react';

interface SunIconProps extends SVGAttributes<SVGElement> {}

export function SunIcon(props: SunIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="miter"
            {...props}
        >
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="22" y1="12" x2="20" y2="12" />
            <line x1="4" y1="12" x2="2" y2="12" />
            <line x1="19.07" y1="19.07" x2="17.66" y2="17.66" />
            <line x1="6.34" y1="6.34" x2="4.93" y2="4.93" />
            <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
            <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
        </svg>
    );
}
