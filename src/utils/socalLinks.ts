
export type socialLink = {
    iconName: 'linkedin' | 'github';
    link: string;
    name: string;
    className?: string;
}

export const socialLinks: socialLink[] = [
    {
        iconName: 'linkedin',
        link: 'https://www.linkedin.com/in/jorge-manzanares-30b63223a/',
        name: 'Linkedin',
        className: 'border border-cyan-700 text-cyan-400 hover:bg-cyan-600/10 hover:text-cyan-600 rounded-full'
    },
    {
        iconName: 'github',
        link: 'https://github.com/jmanzanares12',
        name: 'Github',
        className: 'border-gray-600 text-gray-400 hover:bg-gray-600/10 hover:text-gray-500 rounded-full'
    },
]