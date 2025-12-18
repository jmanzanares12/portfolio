import { useState } from "react";
import { AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMenuFold4Line } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import ThemeButton from "../shared/ThemeButton";

const HeaderApp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 w-full bg-[var(--bg-header-color)] text-[var(--text-header-color)] border-b border-[var(--border-color)] shadow-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center py-4 gap-6">
                    {/* Logo / Nombre */}
                    <div className="flex flex-col px-4 text-center md:text-left">
                        <h1 className="text-lg font-semibold">Jorge Gaitán</h1>
                        <p className="text-xs muted">Desarrollador Web</p>
                    </div>

                    {/* Redes (desktop) */}
                    <div className="hidden md:flex items-center justify-center gap-4">
                        <a
                            href="https://github.com/jmanzanares12"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="p-2 rounded-md transition-colors hover:bg-[var(--bg-hover-color)] hover:text-[#171515]"
                        >
                            <AiOutlineGithub size={18} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jorge-manzanares-30b63223a/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="p-2 rounded-md transition-colors hover:bg-[var(--bg-hover-color)] hover:text-[#0A66C2]"
                        >
                            <FaLinkedin size={18} />
                        </a>

                        <a
                            href={`https://wa.me/50576208329?text=${encodeURIComponent('Hola Jorge!')}`}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                            className="p-2 rounded-md transition-colors hover:bg-[var(--bg-hover-color)] hover:text-[#25D366]"
                        >
                            <AiOutlineWhatsApp size={18} />
                        </a>
                    </div>

                    {/* Acciones */}
                    <div className="flex items-center justify-end gap-3">
                        <div className="hidden md:block">
                            <ThemeButton />
                        </div>

                        <button
                            className="md:hidden p-2 rounded-md transition-colors hover:bg-[var(--bg-hover-color)]"
                            onClick={toggleMenu}
                            aria-label="Abrir menú"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            {isOpen ? <FiX size={20} /> : <RiMenuFold4Line size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú mobile */}
            {isOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden bg-[var(--bg-header-color)] text-[var(--text-header-color)] border-t border-[var(--border-color)] px-6 py-4 flex flex-col gap-4 transition-all"
                >
                    <a
                        href="https://github.com/jmanzanares12"
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 text-sm font-medium hover:text-[#171515]"
                    >
                        <FaGithub className="inline mr-2" /> GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jorge-manzanares-30b63223a/"
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 text-sm font-medium hover:text-[#0A66C2]"
                    >
                        <FaLinkedin className="inline mr-2" />  LinkedIn
                    </a>

                    <a
                        href={`https://wa.me/50576208329?text=${encodeURIComponent('Hola Jorge!')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 text-sm font-medium hover:text-[#25D366]"
                    >
                        <AiOutlineWhatsApp className="inline mr-2" /> WhatsApp
                    </a>

                    <div className="pt-2">
                        <ThemeButton />
                    </div>
                </div>
            )}
        </nav>

    );
};

export default HeaderApp;
