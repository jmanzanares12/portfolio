import { projectsLinks } from "../static/projectsLinks";
import ProjectCard from "../shared/ProjectCard";

const ProjectsApp = () => {
  return (
    <section
      id="projects" // Asegúrate de tener el ID para el scroll suave
      className="relative py-24 px-6 overflow-hidden"
      aria-labelledby="projects-title"
    >
      {/* Sutil resplandor lateral para dar profundidad al grid */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-accent/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-16">
          {/* Badge minimalista */}
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Portafolio
          </span>
          
          <h2 
            id="projects-title" 
            className="text-4xl md:text-5xl font-black tracking-tighter text-main-text leading-none mb-6"
          >
            PROYECTOS <span className="text-primary">DESTACADOS</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed font-medium">
            Una selección de mis despliegues más recientes, desde soluciones 
            <span className="text-main-text"> Full Stack</span> hasta implementaciones estratégicas de 
            <span className="text-main-text"> ERP</span>, priorizando siempre la escalabilidad y las buenas prácticas.
          </p>
        </header>

        {/* Grid ajustado con gap más amplio para que cada card respire */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsLinks.map((project) => (
            <div key={project.link ?? project.name} className="flex h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsApp;