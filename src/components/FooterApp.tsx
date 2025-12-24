import { AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const FooterApp = () => {
    return (
        <footer className="flex flex-col gap-4 items-center justify-center py-8 px-4 bg-[var(--bg-footer-color)] text-center border-t border-[var(--border-color)]">
            <div className="flex flex-col gap-4 items-center justify-center text-white">
                <div>
                    <h2 className="text-base sm:text-lg font-semibold">Jorge Gaitán</h2>
                    <p className="text-xs sm:text-sm ">Desarrollador Web Jr</p>
                </div>

                <nav className="flex flex-wrap justify-center gap-4">
                    <a href="https://github.com/jmanzanares12" target="_blank" rel="noreferrer" className="rounded-full px-2 py-2 hover:text-[#171515] transition-colors duration-300">
                        <AiOutlineGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/jorge-manzanares-30b63223a/" target="_blank" rel="noreferrer" className="rounded-full px-2 py-2 hover:text-[#0A66C2] transition-colors duration-300">
                        <FaLinkedin size={20} />
                    </a>
                    <a href={`https://wa.me/50576208329?text=${encodeURIComponent('Hola Jorge!')}`} target="_blank" rel="noreferrer" className="rounded-full px-2 py-2 hover:text-[#25D366] transition-colors duration-300">
                        <AiOutlineWhatsApp size={20} />
                    </a>
                </nav>
            </div>

            <div className="max-w-7xl border-t border-[var(--border-color)] pt-4 mt-4 w-full">
                    <p className="text-xs sm:text-sm text-[var(--text-muted-color)]">
                        © {new Date().getFullYear()} Jorge Gaitán. Todos los derechos reservados.
                    </p>
                </div>
        </footer>
    )
}

export default FooterApp