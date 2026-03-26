import { useState, useEffect } from "react";
import { AiOutlineGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RiMenuFold4Line } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import ThemeButton from "../shared/ThemeButton";

const HeaderApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Efecto para que el header cambie al hacer scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const socialLinks = [
        { href: "https://github.com/jmanzanares12", icon: <AiOutlineGithub size={20} />, label: "GitHub", color: "hover:text-primary" },
        { href: "https://www.linkedin.com/in/jorge-manzanares-30b63223a/", icon: <FaLinkedin size={20} />, label: "LinkedIn", color: "hover:text-[#0A66C2]" },
        { href: "https://wa.me/50576208329?text=Hola%20Jorge!", icon: <AiOutlineWhatsApp size={20} />, label: "WhatsApp", color: "hover:text-[#25D366]" },
    ];

    return (
        <nav className={`sticky top-0 z-50 w-full transition-all duration-300 border-b 
            ${scrolled 
                ? "bg-background/80 backdrop-blur-md border-border-custom py-2 shadow-sm" 
                : "bg-background border-transparent py-4"}`}>
            
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo / Brand */}
                <div className="flex flex-col group cursor-default">
                    <h1 className="text-lg font-black tracking-tighter text-main-text group-hover:text-primary transition-colors">
                        JORGE GAITÁN
                    </h1>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted">
                        Full Stack Developer
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-2 border-r border-border-custom pr-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className={`p-2 rounded-lg text-muted transition-all hover:bg-primary/5 ${link.color}`}
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <ThemeButton />
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeButton />
                    <button onClick={toggleMenu} className="p-2 text-main-text">
                        {isOpen ? <FiX size={24} /> : <RiMenuFold4Line size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-background border-b border-border-custom p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-2">
                    {socialLinks.map((link) => (
                        <a key={link.label} href={link.href} className={`flex items-center gap-3 font-bold uppercase tracking-widest text-xs text-muted ${link.color}`}>
                            {link.icon} {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default HeaderApp;