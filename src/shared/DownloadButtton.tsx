interface DownloadButtonProps {
    href?: string;
    fileName?: string;
}

const DownloadButton = ({ href, fileName }: DownloadButtonProps) => {
    return (
        <a
            href={href}
            download={fileName}
            className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-border-custom 
                 text-main-text font-black uppercase tracking-[0.2em] text-[9px]
                 hover:bg-main-text hover:text-background transition-all duration-500
                 active:scale-95 group shadow-sm hover:shadow-xl hover:shadow-primary/10"
        >
            <svg
                className="w-3.5 h-3.5 transition-transform duration-500 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
            </svg>
            <span>Descargar CV</span>
        </a>
    );
};

export default DownloadButton;