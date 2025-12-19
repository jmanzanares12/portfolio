import { projectsLinks } from '../static/projectsLinks';
import ProjectCard from '../shared/ProjectCard';

const ProjectsApp = () => { 
    return (
        <section className='max-w-7xl sm:py-2 mx-4 sm:mx-6 lg:mx-auto my-8'>
            <div className='site-container'>
                <header className='max-w-2xl mx-auto text-center mb-10'>
                    <h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
                        Proyectos destacados
                    </h2>
                    <p className='text-[var(--text-muted-color)] mt-4 leading-relaxed'>
                        Sección donde veras mis primeros pasos hasta mis ultimos despliegues, 
                        siempre tratando de aplicar buenas prácticas y nuevas tecnologías.
                    </p>
                </header>

                <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0'>
                    {projectsLinks.map((project, index) => (
                        <ProjectCard key={index} {...project} reverse={index % 2 !== 0} />
                    ))}
                </div>
            </div>
        </section>
    )    
}

export default ProjectsApp;