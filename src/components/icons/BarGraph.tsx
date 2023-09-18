export default function BarGraph() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="none"
            viewBox="0 0 80 80"
        >
            <g stroke="#0891B2" strokeWidth="4.991" clipPath="url(#clip0_1_1478)">
                <path strokeLinecap="round" d="M73.333 73.333H6.667"></path>
                <path
                    strokeOpacity="0.5"
                    d="M70 73.333v-25a5 5 0 00-5-5H55a5 5 0 00-5 5v25"
                ></path>
                <path d="M50 73.333V16.667c0-4.714 0-7.071-1.465-8.536C47.072 6.667 44.715 6.667 40 6.667s-7.071 0-8.535 1.464C30 9.596 30 11.953 30 16.667v56.666"></path>
                <path
                    strokeOpacity="0.5"
                    d="M30 73.333V31.667a5 5 0 00-5-5H15a5 5 0 00-5 5v41.666"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_1_1478">
                    <rect width="80" height="80" fill="#fff" rx="16.636"></rect>
                </clipPath>
            </defs>
        </svg>
    );
}
