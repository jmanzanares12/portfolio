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
                    Soy un amante del desarrollo de aplicaciones web. Me gusta aprender y crear soluciones que me ayuden a mejorar mis habilidades.
                    He trabajado con Odoo, desarrollando módulos que mejoran la experiencia de usuario, enfocándome en eficiencia y seguridad.
                </p>
                <p className="text-lg">
                    Actualmente estudio y practico tecnologías como React, Next.js, Tailwind CSS, TypeScript, Node.js, PostgreSQL y Git.
                    Me motiva trabajar en equipo y afrontar nuevos retos constantemente.
                </p>
                <p className="text-lg">
                    Mi objetivo es crecer profesionalmente y trabajar en proyectos que aporten valor, tanto personal como profesionalmente.
                    Si piensas que puedo ayudarte, no dudes en contactarme.
                </p>
            </div>

            <div className='flex flex-col gap-4 md:gap-0 md:flex-row'>
                <DownloadButton
                    href="/cv/Jorge_Manzanares_CV.pdf"
                    fileName="Jorge_Manzanares_CV.pdf"
                    className='mt-4'
                />
            </div>


        </section>
    );
};

export default AboutMeApp;
