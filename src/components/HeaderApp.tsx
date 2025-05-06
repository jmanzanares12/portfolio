import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeButton from "../shared/ThemeButton";

const HeaderApp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className='flex items-center justify-between py-4 px-6 md:px-8 bg-[var(--header-bg-color)] text-[var(--text-color)] shadow-md sticky top-0 z-50'>
            <div>
                <h1 className="text-2xl font-semibold">
                    <span>Jorge Manzanares</span>
                </h1>
            </div>

            <button onClick={toggleMenu} className="md:hidden text-xl">
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav className='hidden md:flex items-center gap-4 text-sm'>
                <a href='#home' className="rounded-full px-4 py-2 hover:bg-[var(--hover-bg-color)] transition-colors duration-300">
                    Sobre mi
                </a>
                <a href='#projects' className="rounded-full px-4 py-2 hover:bg-[var(--hover-bg-color)] transition-colors duration-300">
                    Proyectos
                </a>
                <a href='#contact' className="rounded-full px-4 py-2 hover:bg-[var(--hover-bg-color)] transition-colors duration-300">
                    Contacto
                </a>
                <ThemeButton />
            </nav>

            {
                isOpen && (
                    <div className="absolute top-[100%] left-0 w-full bg-[var(--header-bg-color)] flex flex-col gap-4 py-4 md:hidden z-40">
                        <a href="#home" onClick={toggleMenu} className="rounded-full px-4 py-2 hover:bg-[var(--hover-bg-color)] transition-colors duration-300">
                            Sobre mi
                        </a>
                        <a href="#projects" onClick={toggleMenu} className="rounded-full px-4 py-2 hover:bg-[var(--hover-bg-color)] transition-colors duration-300">
                            Proyectos
                        </a>
                        <a href="#contact" onClick={toggleMenu} className="rounded-full px-4 py-2 hover:bg-[var(--hover-bg-color)] transition-colors duration-300">
                            Contacto
                        </a>
                        <ThemeButton />
                    </div>
                )
            }

        </header>
    );
};

export default HeaderApp;
