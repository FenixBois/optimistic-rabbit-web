interface SunIconProps {}

export function SunIcon({}: SunIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="72"
            height="72"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="miter"
        >
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="12" y1="2" x2="12" y2="4"></line>
            <line x1="12" y1="20" x2="12" y2="22"></line>
            <line x1="22" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="12" x2="2" y2="12"></line>
            <line x1="19.07" y1="19.07" x2="17.66" y2="17.66"></line>
            <line x1="6.34" y1="6.34" x2="4.93" y2="4.93"></line>
            <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line>
            <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line>
        </svg>
    );
}
