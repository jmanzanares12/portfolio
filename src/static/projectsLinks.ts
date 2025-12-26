import logicsa from '../assets/logicsa.avif';
import pokedex from '../assets/pokedex.avif'
import horoscope from '../assets/horoscope.avif';
import rock_paper_scissor from '../assets/rps.avif';
import pasteleria from '../assets/bakery.avif';
import riverabi from '../assets/RiveraBI.avif';

export const projectsLinks = [
    {
        name: 'Logicsa',
        link: 'https://www.logicsa.net/',
        description: 'Rediseño de pagina web de la empresa Logicsa, dedicada a almacenamiento y gestion de documentos fisicos y digitales.',
        image: logicsa,
        tags: ['html', 'javascript', 'css', 'bootstrap', 'php']
    },
    {
        name: 'Pokedex',
        link: 'https://pokedex-jade-psi.vercel.app/',
        description: 'Poyecto final de curso de introduccion al desarrollo web con React.',
        image: pokedex,
        tags: ['React', 'PokeAPI', 'Tailwind CSS', 'Vercel']
    },
    {
        name: 'Horoscope',
        link: 'https://jmanzanares12.github.io/horoscope-app/',
        description: 'Proyecto de laboratorio para el curso de desarrollo web con React.',
        image: horoscope,
        tags: ['React', 'Tailwind CSS']
    },
    {
        name: 'Rock Paper Scissors',
        link: 'https://jmanzanares12.github.io/rock-paper-scissor/',
        description: 'Proyecto de laboratorio para el curso de desarrollo web con React.',
        image: rock_paper_scissor,
        tags: ['React']
    },
    {
        name: 'Pasteleria Lilliam',
        link: 'https://pasteleria-l.vercel.app/',
        description: 'Proyecto personal para la creación de una pagina web dedicada a la pastelería Lilliam.',
        image: pasteleria,
        tags: ['React', 'Tailwind CSS', 'JavaScript']
    },
    {
        name: 'RiveraBI',
        link: '',
        description: 'En desarrollo',
        image: riverabi,
        tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'Prisma']
    }
]  