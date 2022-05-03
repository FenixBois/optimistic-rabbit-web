import type { SVGAttributes } from 'react';

interface ArrowUpProps extends SVGAttributes<SVGElement> {}

export function ArrowUp(props: ArrowUpProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
            {...props}
        >
            <polyline points="17 14 12 9 7 14" />
        </svg>
    );
}
