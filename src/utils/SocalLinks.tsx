import { JSX } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export type SocialLink = {
    icon: JSX.Element;
    link: string;
    name: string;
    className?: string;
}

export const SocialLinks: SocialLink[] = [
    {
        icon: <FaLinkedinIn size={20} />,
        link: 'https://www.linkedin.com/in/jorge-manzanares-30b63223a/',
        name: 'Linkedin',
        className: 'border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 hover:text-cyan-600 rounded-full'
    },
    {
        icon: <FaGithub size={20} />,
        link: 'https://github.com/jmanzanares12',
        name: 'Github',
        className: 'border-gray-600 text-gray-400 hover:bg-gray-600/10 hover:text-gray-500 rounded-full'
    },
]