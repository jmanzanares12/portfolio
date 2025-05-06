import { FaDownload } from "react-icons/fa";

interface DownloadButtonProps {
    className?: string;
    href?: string;
    fileName?: string;
}

const DownloadButton = ({ className='', href, fileName }: DownloadButtonProps) => {
    return(
        <a
            href={href}
            download={fileName}
            className={`inline-flex items-center gap-2 bg-[var(--primary-color)] text-white font-semibold px-4 py-2 rounded-lg hover:opacity-all transition-all ${className}`}
            aria-label='Download'
        >
            <FaDownload />
            Descargar CV
        </a>
    )
}

export default DownloadButton;