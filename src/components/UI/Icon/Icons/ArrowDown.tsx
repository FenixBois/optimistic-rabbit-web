import type { SVGAttributes } from 'react';

interface ArrowDownProps extends SVGAttributes<SVGElement> {}

export function ArrowDown(props: ArrowDownProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
        >
            <polyline points="7 10 12 15 17 10" />
        </svg>
    );
}
