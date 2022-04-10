import type { SVGAttributes } from 'react';

interface MoonIconProps extends SVGAttributes<SVGElement> {}

export function MoonIcon(props: MoonIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="miter"
            {...props}
        >
            <path d="M19,16A9,9,0,0,1,10.91,3.07a9,9,0,1,0,9.18,12.86A9.81,9.81,0,0,1,19,16Z" />
        </svg>
    );
}
