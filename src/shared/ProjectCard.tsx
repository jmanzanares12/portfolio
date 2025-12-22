import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    name?: string;
    link?: string;
    description?: string;
    image?: string;
    tags?: string[];
}


const ProjectCard = ({ name, link, description, image, tags }: ProjectCardProps) => {
    return (
        <div 
            className="group flex flex-col bg-[var(--bg-card-color)] border border-[var(--border-color)] rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-[var(--primary-color)]/5 hover:-translate-y-1
            ring-1 ring-[var(--primary-color)]/20"
        >
            
            {/* Contenedor de Imagen: Ahora arriba y con relación de aspecto fija */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay sutil para dar profundidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card-color)]/20 to-transparent" />
            </div>

            {/* Contenido: Flujo vertical natural */}
            <div className="flex flex-col flex-grow p-5 md:p-6">
                <div className="flex-grow">
                    <h3 className="text-lg font-bold tracking-tight text-[var(--text-color)] mb-3 group-hover:text-[var(--primary-color)] transition-colors">
                        {name}
                    </h3>

                    <p className="text-sm leading-relaxed text-[var(--text-muted-color)] mb-6 line-clamp-3">
                        {description}
                    </p>

                    {/* Tags: Estilo minimalista y uniforme */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                        {tags && tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border border-[var(--border-color)] text-[var(--text-muted-color)] bg-[var(--border-color)]/5"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Acción: Botón minimalista al pie */}
                <div className="pt-4 border-t border-[var(--primary-color)]/20">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--text-color)] hover:text-[var(--primary-color)] transition-all group/link"
                        >
                            Ver Proyecto
                            <FaExternalLinkAlt className="w-3 h-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;