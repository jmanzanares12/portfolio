import { projectsLinks } from '../static/projectsLinks';
import ProjectCard from '../shared/ProjectCard';

const ProjectsApp = () => { 
    return (
        <section className='min-h-screen py-10 px-5 text-[var(--text-color)] bg-[var(--bg-color)]'>
            <p className='text-center text-2xl font-semibold mb-20'>Mis proyectos: aplicaciones donde practico tecnologías modernas y buenas prácticas</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center place-items-center'>
                {projectsLinks.map(({name, link, description, image, tags}, index) => (
                    <ProjectCard 
                        key={index} 
                        name={name} 
                        link={link} 
                        description={description} 
                        image={image} 
                        tags={tags}
                    />
                ))}
            </div>
        </section>
    )    
}

export default ProjectsApp;