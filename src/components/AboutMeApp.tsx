import photo from '../assets/photo.png';
import DownloadButton from '../shared/DownloadButtton';

const AboutMeApp = () => {
    return (
        <section id="about-me" className="min-h-screen flex flex-col md:flex-col items-center justify-center px-6 sm:px-10 py-16 gap-10 text-[var(--text-color)]">
            <div className='w-50 h-50 sm:w-48 sm:h-48 md:w-60 md:h-60 overflow-hidden shadow-md rounded-full border border-[var(--primary-color)]'>
                <img src={photo} alt="Foto de Jorge Manzanares" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-3xl space-y-6 text-base sm:text-lg text=justify">
                <p className="text-lg">
                Apasionado por el desarrollo de aplicaciones web, me dedico a crear soluciones innovadoras que potencien la experiencia 
                de usuario y optimicen procesos. Con experiencia en el desarrollo de módulos personalizados para Odoo, priorizo la 
                eficiencia, la seguridad y un código mantenible.
                </p>
                <p className="text-lg">
                    Actualmente, me especializo en tecnologías modernas como:
                </p>
                <ul className="list-disc list-inside">
                        <li>React, Next.js, TypeScript para interfaces dinamicas y escalables.</li>
                        <li>Tailwind CSS para estilos responsivos y limpios.</li>
                        <li>Node.js y PostgreSQL para el desarrollo de backend robusto.</li>
                        <li>Git y GitHub para el control de versiones y colaboración.</li>
                    </ul>
                <p className="text-lg">
                Disfruto trabajar en equipo, enfrentar nuevos desafíos y aprender constantemente. Mi objetivo es crecer profesionalmente, 
                contribuyendo a proyectos que generen impacto real y me permitan seguir evolucionando.
                </p>
                <span className='text-lg font-semibold'>
                ¿Crees que puedo aportar valor a tu equipo o proyecto? ¡Hablemos!
                </span>
            </div>

            <div className='flex flex-col gap-4 md:gap-0 md:flex-row'>
                <DownloadButton
                    href="/Jorge_Manzanares_CV.pdf"
                    fileName="Jorge_Manzanares_CV.pdf"
                    className='mt-4'
                />
            </div>
        </section>
    );
};

export default AboutMeApp;
