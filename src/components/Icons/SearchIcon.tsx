interface SearchIcon {
    size?: number;
}

export function SearchIcon({ size }: SearchIcon) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size || 24}
            height={size || 24}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="9" fill="none" />
            <line x1="17.5" y1="17.5" x2="22" y2="22" />
        </svg>
    );
}
