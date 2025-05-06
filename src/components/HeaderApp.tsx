import ThemeButton from "../shared/ThemeButton";

const HeaderApp = () => {
    return (
        <header className='flex items-center justify-between py-4 px-8 bg-[var(--header-bg-color)] text-[var(--text-color)] shadow-md sticky top-0 z-50'>
            <div>
                <h1 className="text-2xl font-semibold">
                    <span>Jorge Manzanares</span>
                </h1>
            </div>

            <nav className="flex items-center gap-4 text-sm">
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
        </header>
    );
};

export default HeaderApp;
