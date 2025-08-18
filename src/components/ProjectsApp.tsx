import { projectsLinks } from '../static/projectsLinks';
import ProjectCard from '../shared/ProjectCard';

const ProjectsApp = () => { 
    return (
        <section className='min-h-screen py-6 px-3 md:px-12 lg:px-12 bg-[var(--bg-color)] text-[var(--text-color)]'>
            <h2 className='text-center text-3xl font-bold mb-4'>Mis proyectos</h2>
            <p className='text-center text-lg text-[var(--text-muted-color)] mb-12'>Laboratios y practicas que he desarrollado con tecnologias modernas y mejorando las buenas prácticas.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 '>
                {projectsLinks.map((project, index) => (
                    <ProjectCard key={index} {...project} reverse={index % 2 !==0}/>
                ))}
            </div>
        </section>
    )    
}

export default ProjectsApp;