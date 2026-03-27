import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../features/contact/components/ContactForm';

const ContactApp = () => {
    return (
        <section id="contact" className="relative max-w-7xl mx-auto py-24 px-6 lg:px-8 overflow-hidden">
            {/* Resplandor de fondo sutil */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Columna Izquierda: Info de contacto */}
                <div className="space-y-12">
                    <header className="space-y-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                            Contacto
                        </span>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-main-text leading-none">
                            HABLEMOS<span className="text-primary">.</span>
                        </h2>
                        <p className="text-muted text-lg leading-relaxed max-w-md font-medium">
                            ¿Tienes una idea en mente o buscas colaborar en un proyecto de 
                            <span className="text-main-text"> Desarrollo</span> o <span className="text-main-text">ERP</span>? 
                            Estoy abierto a nuevas oportunidades.
                        </p>
                    </header>

                    <div className="space-y-8">
                        {/* Email Item */}
                        <div className="flex items-center gap-6 group">
                            <div className="p-4 rounded-2xl bg-card border border-border-custom text-primary group-hover:border-primary/50 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                <FaEnvelope className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-black">Email</p>
                                <a href="mailto:jmanzanaresg27@gmail.com" className="text-lg font-bold text-main-text hover:text-primary transition-colors block leading-none">
                                    jmanzanaresg27@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* LinkedIn Item */}
                        <div className="flex items-center gap-6 group">
                            <div className="p-4 rounded-2xl bg-card border border-border-custom text-primary group-hover:border-primary/50 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                <FaLinkedin className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-black">LinkedIn</p>
                                <a href="https://www.linkedin.com/in/jorge-manzanares-30b63223a/" target="_blank" rel="noreferrer" className="text-lg font-bold text-main-text hover:text-primary transition-colors block leading-none">
                                    Jorge Manzanares Gaitán
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: El Formulario */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] blur-sm opacity-50" />
                    <div className="relative">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactApp;