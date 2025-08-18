import { AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const FooterApp = () => {
    return (
        <footer className="flex flex-row gap-4 items-center justify-center py-8 px-4 bg-[var(--bg-footer-color)] text-center border-t border-[var(--border-color)]">
            <div className="flex flex-col gap-4 items-center justify-center">
                <div>
                    <h2 className="text-base sm:text-lg font-semibold">Jorge Gaitán</h2>
                    <p className="text-xs sm:text-sm text-[var(--muted-text-color)]">Desarrollador Web Jr</p>
                </div>

                <nav className="flex flex-wrap justify-center gap-4">
                    <a href="https://github.com/jmanzanares12" target="_blank" rel="noreferrer" className="rounded-full px-2 py-2 hover:bg-black/50 transition-colors duration-300">
                        <AiOutlineGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/jorge-manzanares-30b63223a/" target="_blank" rel="noreferrer" className="rounded-full px-2 py-2 hover:bg-cyan-500/50 transition-colors duration-300">
                        <FaLinkedin size={20} />
                    </a>
                    <a href={`https://wa.me/50576208329?text=${encodeURIComponent('Hola Jorge!')}`} target="_blank" rel="noreferrer" className="rounded-full px-2 py-2 hover:bg-green-500/50 transition-colors duration-300">
                        <AiOutlineWhatsApp size={20} />
                    </a>
                </nav>

                <p className="text-xs text-[var(--muted-text-color)]">
                    © {new Date().getFullYear()} Jorge Gaitán. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}

export default FooterApp