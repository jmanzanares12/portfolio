import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    name?: string;
    link?: string;
    description?: string;
    image?: string;
    tags?: string[];
    reverse?: boolean;
}

const ProjectCard = ({ name, link, description, image, tags, reverse }: ProjectCardProps) => {
    return (
        <div
            className={`
            group flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} bg-[var(--bg-card-color)]
            border border-[var(--border-color)] rounded-xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1
            ring-1 ring-[var(--primary-color)]/50`}
        >
            <div className="relative w-full md:w-1/2 h-56 md:h-44 overflow-hidden">
                <img src={image} alt={name} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
            </div>

            <div className="w-full md:w-1/2 p-2 flex flex-col justify-between gap-4">
                <div>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    {link && (
                        <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:underline mt-1">
                            <FaExternalLinkAlt className="w-3.5 h-3.5" />
                            Ver proyecto
                        </a>
                    )}
                </div>

                <p className="text-sm text-[var(--text-muted-color)] leading-relaxed">{description}</p>

                <div className="flex flex-wrap items-center justify-between gap-3">
                    {tags && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-3 py-1 rounded-full
                                    bg-[var(--bg-badge)]
                                    text-[var(--text-muted-color)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;