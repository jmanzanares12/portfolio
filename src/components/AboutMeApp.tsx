import photo from '../assets/photo.avif';
import DownloadButton from '../shared/DownloadButtton';

const AboutMeApp = () => {
    return (
        <section className='max-w-7xl bg-gradient-to-b from-[var(--bg-color)] to-[var(--bg-soft-color)] py-16 sm:py-24 border border-[var(--border-color)] rounded-lg shadow-md mx-4 sm:mx-6 lg:mx-auto my-8 ring-1 ring-[var(--primary-color)]/20'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                <img
                    src={photo}
                    alt="Jorge Gaitán"
                    className='w-32 sm:w-48 h-32 sm:h-48 mx-auto rounded-full
                    border-2 border-[var(--primary-color)] ring-4 ring-[var(--primary-color)]/20 
                    shadow-xl mb-6 transition-transform duration-300 hover:scale-105'
                />
                <h1 className='text-3xl sm:text-4xl font-bold mb-2'>
                    <span className='text-[var(--primary-color)]'>Jorge</span> Gaitán
                </h1>
                <p className='text-base sm:text-lg text-[var(--text-muted-color)] mb-6'>
                    Desarrollador Web Full Stack
                </p>
                <p className='text-sm sm:text-lg leading-relaxed text-[var(--text-muted-color)] mb-8 max-w-2xl mx-auto'>
                    Creo soluciones modernas y escalables que se adapten a las necesidades de los usuarios,
                    utilizando un stack de tecnologías modernas y de vanguardia como
                    <strong> React.js</strong>, <strong> Next.js</strong>, <strong> Tailwind CSS</strong>,
                    <strong> PostgreSQL</strong> y <strong> Prisma</strong>.
                    <br /><br />
                    Además, cuento con experiencia en integración e implementación de sistemas ERP con
                    <strong> Odoo</strong> y <strong> ERPNext</strong>, busco mejorar continuamente mis habilidades para entregar
                    soluciones de alto impacto.
                </p>

                <div className='flex flex-col sm:flex-row justify-center gap-4'>
                    <a
                        href="#projects"
                        className='px-6 py-3 bg-[var(--color-info)] text-white rounded-lg shadow-lg hover:bg-[var(--color-info)]/90 transition-all duration-300'
                    >
                        Ver proyectos
                    </a>
                    <a
                        href="#contact"
                        className='px-6 py-3 border border-[var(--color-info)] text-[var(--color-info)] rounded-lg shadow-lg hover:bg-[var(--color-info)]/10 transition-all duration-300'
                    >
                        Contactar
                    </a>

                    <DownloadButton
                        href='/Resume 2026.pdf'
                        fileName='Resume.pdf'
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMeApp;
