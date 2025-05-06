import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    name?: string;
    link?: string;
    description?: string;
    image?: string;
    tags?: string[]
}

const ProjectCard = ({name, link, description, image, tags}: ProjectCardProps) => {
    return(
        <div className='bg-[var(--card-bg-color)] text-[var(--text-color)] rounded-2xl shadow-md p-4 flex flex-col gap-4 w-full sm:max-w-md transition-transform hover:scale-[1.02]'>
            <img src={image} alt={name} className="rounded-lg object-cover h-48 w-full" />
            <div className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold'>
                    {name}
                </h3>
                <a 
                    href={link} 
                    target='_blank'
                    rel='noreferrer'
                    className='text-[var(--primary-color)] hover:underline text-sm flex items-center gap-2'
                >
                    <FaExternalLinkAlt className="text-xs"/>
                    Ver proyecto
                </a>
            </div>
            
            <p className='text-sm text-[var(--muted-text-color)]'>
                    {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {tags?.map((tag, index) => (
                    <span key={index} className='text-xs bg-[var(--primary-color)] text-white px-2 py-1 rounded-full'>
                        {tag}
                    </span>
                ))}

            </div>
        </div>
    )
}

export default ProjectCard;