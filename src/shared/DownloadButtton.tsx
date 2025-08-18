import { FaDownload } from "react-icons/fa";

interface DownloadButtonProps {
    href?: string;
    fileName?: string;
}

const DownloadButton = ({href, fileName }: DownloadButtonProps) => {
    return(
        <a
            href={href}
            download={fileName}
            className={`flex justify-center items-center px-6 py-3 gap-2 text-sm text-[var(--text-muted-color)] border border-[var(--border-color)] rounded-lg hover:border-[var(--border-color)]/150 `}
            aria-label='Download'
        >
            <FaDownload />
            Descargar CV
        </a>
    )
}

export default DownloadButton;