import type { SVGAttributes } from 'react';

interface PlusProps extends SVGAttributes<SVGElement> {}

export function Plus(props: PlusProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
    );
}
