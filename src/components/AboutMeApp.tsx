import photo from '../assets/photo.avif';
import DownloadButton from '../shared/DownloadButtton';

const AboutMeApp = () => {
    return (
        <section className='bg-[var(--bg-color)] text-[var(--text-color)] py-16'>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                <img 
                    src={photo}
                    alt="Jorge Gaitán"
                    className='w-32 sm:w-48 h-32 sm:h-48 mx-auto rounded-full border border-[var(--primary-color)] shadow-lg mb-4 sm:mb-6'
                />
                <h1 className='text-2xl sm:text-4xl font-bold text-[var(--text-color)] mb-2 sm:mb-4'>Jorge Gaitán</h1>
                <p className='text-base sm:text-lg text-[var(--muted-text-color)] font-medium mb-4 sm:mb-6'>Desarrollador Web Jr</p>
                <p className='text-sm sm:text-lg text-[var(--muted-text-color)] mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto'>
                    Creo soluciones modernas y escalables que se adapten a las necesidades de los usuarios, 
                    utilizando un stack de tecnologias modernas y de vanguardia: <strong>React.js</strong>, <strong>Next.js</strong>, <strong>TailwinCSS</strong>, <strong>PostgreSQL</strong> y <strong>Prisma</strong>. 
                    Ademas, cuento con experiencia en integracion e implementacion de sistemas ERP con <strong>Odoo</strong>. Continuamente busco aprender y mejorar mis habilidades 
                    con el fin de entregar mejores propuestas y soluciones a los ususarios.
                </p>
                <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4'>
                    <a 
                        href="#projects"
                        className='px-6 py-3 bg-[var(--color-info)] text-white rounded-lg shadow-md hover:bg-[var(--color-info)]/80 transition-all duration-300'
                    >
                        Ver proyectos
                    </a>
                    <a 
                        href="#contact"
                        className='px-6 py-3 border border-[var(--color-info)] text-[var(--color-info)] rounded-lg shadow-md hover:bg-[var(--color-info)]/10 transition-all duration-300'
                    >
                        Contactar
                    </a>

                    <DownloadButton 
                        href='/Resume.pdf'
                        fileName='Resume.pdf'
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMeApp;
