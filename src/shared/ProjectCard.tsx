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
            className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}
                items-center bg-[var(--bg-card-color)] border border-[var(--border-color)] 
                rounded-xl shadow-md overflow-hidden p-4 gap-4`}
        >
            <div className="w-full md:w-1/2 h-64 md:h-80">
                <img src={image} alt={name} className="w-full h-full object-cover rounded-xl" />
            </div>

            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between gap-4">
                <div>
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    {link && (
                        <a href={link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-[var(--text-muted-color)] hover:underline transition-all duration-300">
                            <FaExternalLinkAlt className="w-4 h-4" />
                            Ver proyecto
                        </a>
                    )}
                </div>

                <p className="text-[var(--text-muted-color)] leading-relaxed">{description}</p>

                {tags && (
                    <div className="flex flex-warp gap-2 mt-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-[var(--color-info)] text-xs text-white px-2 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectCard;