import type { SVGAttributes } from 'react';

interface SearchIconProps extends SVGAttributes<SVGElement> {}

export function SearchIcon(props: SearchIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <circle cx="11" cy="11" r="9" fill="none" />
            <line x1="17.5" y1="17.5" x2="22" y2="22" />
        </svg>
    );
}
