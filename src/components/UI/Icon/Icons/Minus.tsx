import type {SVGAttributes} from 'react';

interface MinusProps extends SVGAttributes<SVGElement> {
}

export function Minus(props: MinusProps) {
    return (
        <svg viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg"
             strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 12H6"/>
        </svg>
    );
}