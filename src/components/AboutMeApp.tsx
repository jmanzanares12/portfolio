import photo from '../assets/photo.avif';
import DownloadButton from '../shared/DownloadButtton';

const AboutMeApp = () => {
    return (
        <section className="relative overflow-hidden pt-20 pb-16 px-6">
            {/* Elemento decorativo de fondo - Un resplandor sutil */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                {/* Avatar con diseño refinado */}
                <div className="relative mb-10">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                    <img
                        src={photo}
                        alt="Jorge Gaitán"
                        className="relative w-32 md:w-44 h-32 md:h-44 rounded-full object-cover border-4 border-background shadow-2xl ring-1 ring-border-custom"
                    />
                </div>

                {/* Tipografía con mejor jerarquía */}
                <div className="space-y-4 mb-10">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-main-text leading-none">
                        JORGE <span className="text-primary">GAITÁN</span>
                    </h2>
                    <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-muted">
                        Soluciones Digitales & Especialista ERP
                    </p>
                </div>

                {/* Texto descriptivo más limpio */}
                <div className="max-w-2xl text-muted text-base md:text-lg leading-relaxed font-medium space-y-6 mb-12">
                    <p>
                        Diseño y desarrollo soluciones modernas con un enfoque en la escalabilidad, dominando el ecosistema de 
                        <span className="text-main-text"> React, Next.js y PostgreSQL.</span>
                    </p>
                    <p className="text-sm border-l-2 border-primary/30 pl-4 italic">
                        Mi valor diferencial: La integración estratégica de sistemas 
                        <span className="text-main-text font-bold"> Odoo y ERPNext</span> para optimizar procesos de negocio.
                    </p>
                </div>

                {/* Botones de acción unificados */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <a
                        href="#projects"
                        className="w-full sm:w-auto px-10 py-4 bg-main-text text-background dark:bg-white dark:text-navy-950 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl"
                    >
                        Ver proyectos
                    </a>
                    
                    <div className="flex items-center gap-4">
                        <a
                            href="#contact"
                            className="text-[10px] font-black uppercase tracking-widest text-main-text hover:text-primary transition-colors"
                        >
                            Contactar
                        </a>
                        <span className="w-1 h-1 rounded-full bg-border-custom" />
                        <DownloadButton
                            href='/Resume 2026.pdf'
                            fileName='Resume.pdf'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeApp;