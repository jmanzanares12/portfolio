import { useState } from "react";
import { AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RiMenuFold4Line } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import ThemeButton from "../shared/ThemeButton";

const HeaderApp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="sticky top-0 z-50 bg-[var(--bg-header-color)] text-[var(--text-color)] shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">

                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-color)]">Jorge Gaitán</h1>
                    <p className="text-xs sm:text-sm text-[var(--text-muted-color)] font-medium">Desarrollador Web Jr</p>
                </div>

                <nav className="hidden md:flex gap-4 items-center">
                    <a href="https://github.com/jmanzanares12" target="_blank" rel="noreferrer" className="rounded-full px-2 py-2 hover:bg-black/50 transition-colors duration-300">
                        <AiOutlineGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/jorge-manzanares-30b63223a/" target="_blank" rel="noreferrer" className="rounded-full px-2 py-2 hover:bg-cyan-500/50 transition-colors duration-300">
                        <FaLinkedin size={20} />
                    </a>
                    <a href={`https://wa.me/50576208329?text=${encodeURIComponent('Hola Jorge!')}`} target="_blank" rel="noreferrer" className="rounded-full px-2 py-2 hover:bg-green-500/50 transition-colors duration-300">
                        <AiOutlineWhatsApp size={20} />
                    </a>

                    <ThemeButton />
                </nav>

                <button className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <FiX size={24} /> : <RiMenuFold4Line size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[var(--bg-header-color)] text-[var(--text-color)] border-t border-[var(--border-color)] py-4 px-4 flex flex-col gap-4">
                    <a href="https://github.com/jmanzanares12" target="_blank" rel="noreferrer" className="rounded-full px-4 py-2 hover:bg-black/50 transition-colors duration-300">
                        <AiOutlineGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/jorge-manzanares-30b63223a/" target="_blank" rel="noreferrer" className="rounded-full px-4 py-2 hover:bg-cyan-500/50 transition-colors duration-300">
                        <FaLinkedin size={20} />
                    </a>
                    <a href={`https://wa.me/50576208329?text=${encodeURIComponent('Hola Jorge!')}`} target="_blank" rel="noreferrer" className="rounded-full px-4 py-2 hover:bg-green-500/50 transition-colors duration-300">
                        <AiOutlineWhatsApp size={20} />
                    </a>
                    <ThemeButton />
                </div>
            )}
        </header>
    );
};

export default HeaderApp;
