import { FaDownload } from "react-icons/fa";

interface DownloadButtonProps {
    href?: string;
    fileName?: string;
}

const DownloadButton = ({ href, fileName }: DownloadButtonProps) => {
    return (
        <a
            href={href}
            download={fileName}
            className="group inline-flex items-center justify-center gap-3 px-6 py-3 
                       text-[10px] font-black uppercase tracking-[0.2em] text-muted 
                       border border-border-custom rounded-2xl
                       hover:bg-primary/5 hover:border-primary/30 hover:text-primary 
                       transition-all duration-300 active:scale-95"
            aria-label="Descargar CV"
        >
            <FaDownload className="w-3 h-3 transition-transform group-hover:-translate-y-0.5" />
            Descargar CV
        </a>
    );
};

export default DownloadButton;