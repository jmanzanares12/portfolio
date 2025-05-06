import React from "react";

interface SocialButtonProps {
    icon: React.ReactNode;
    link: string;
    name: string;
    className?: string;
}

const SocialButton = ({ icon, link, name, className='' }: SocialButtonProps) => {
    return(
        <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 ${className}`}
            aria-label={name}
        >
            {icon}
        </a>
    )
}

export default SocialButton;