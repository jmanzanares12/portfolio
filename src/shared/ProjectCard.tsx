import { memo } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
  link?: string;
  tags?: readonly string[];
};

function ProjectCardBase({ name, link, description, image, tags }: ProjectCardProps) {
  return (
    <article
      className="group flex flex-col bg-card border border-border-custom
      rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
    >
      {/* Contenedor de Imagen */}
      <div className="relative aspect-[16/10] overflow-hidden bg-background">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-grow p-6 md:p-8 relative z-10">
        <div className="flex-grow">
          <h3 className="text-xl font-bold tracking-tight text-main-text mb-3 group-hover:text-primary transition-colors">
            {name}
          </h3>

          <p className="text-sm leading-relaxed text-muted mb-6 line-clamp-3">
            {description}
          </p>

          {/* Tags estilo píldora, sin bordes duros */}
          {tags?.length ? (
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full
                  bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {/* Footer del card: Sin línea separadora, usando 'mt-auto' para empujar al fondo */}
        <div className="pt-2 mt-auto">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-main-text
              hover:text-primary transition-all group/link"
              aria-label={`Abrir proyecto: ${name}`}
            >
              Ver Proyecto
              <FaExternalLinkAlt className="w-3 h-3 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default memo(ProjectCardBase);