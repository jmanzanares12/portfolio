import { JSX } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

type IconName = 'linkedin' | 'github';

export const getIconByName = (name: IconName, size =20 ): JSX.Element => {
    const icons = {
        linkedin: <FaLinkedinIn size={size} />,
        github: <FaGithub size={size} />,
    };
    return icons[name];
}