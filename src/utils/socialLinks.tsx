import { LiaLinkedin, LiaGithub } from "react-icons/lia";

export const socialLinks = [
    {
        icon: <LiaLinkedin size={20} />,
        link: 'https://www.linkedin.com/in/jorge-manzanares-30b63223a/',
        name: 'Linkedin',
        className: 'border-sky-500 text-sky-500 hover:bg-sky-500/10 hover:text-sky-500 rounded-full',
    },
    {
        icon: <LiaGithub size={20} />,
        link: 'https://github.com/jmanzanares12',
        name: 'Github',
        className: 'border-gray-500 text-gray-500 hover:bg-gray-500/10 hover:text-gray-500 rounded-full',
    }
]