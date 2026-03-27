import { AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const FooterApp = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { href: "https://github.com/jmanzanares12", icon: <AiOutlineGithub size={20} />, label: "GitHub", hover: "hover:text-primary" },
        { href: "https://www.linkedin.com/in/jorge-manzanares-30b63223a/", icon: <FaLinkedin size={20} />, label: "LinkedIn", hover: "hover:text-[#0A66C2]" },
        { href: `https://wa.me/50576208329?text=${encodeURIComponent('Hola Jorge!')}`, icon: <AiOutlineWhatsApp size={20} />, label: "WhatsApp", hover: "hover:text-[#25D366]" },
    ];

    return (
        <footer className="bg-background border-t border-border-custom py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
                
                {/* Branding sutil */}
                <div className="text-center space-y-2">
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-main-text">
                        Jorge <span className="text-primary">Gaitán</span>
                    </h2>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted">
                        Full Stack Developer
                    </p>
                </div>

                {/* Navegación Social estilo Minimal */}
                <nav className="flex items-center gap-2">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={link.label}
                            className={`p-3 rounded-xl text-muted transition-all duration-300 hover:bg-primary/5 ${link.hover} hover:-translate-y-1`}
                        >
                            {link.icon}
                        </a>
                    ))}
                </nav>

                {/* Copyright con línea minimalista */}
                <div className="w-full max-w-xs border-t border-border-custom pt-8 flex flex-col items-center gap-2">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-muted">
                        © {currentYear} — Nicaragua
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterApp;