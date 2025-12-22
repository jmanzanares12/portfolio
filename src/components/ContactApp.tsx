import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../features/contact/components/ContactForm';

const ContactApp = () => {
    return (
        <section className='max-w-7xl mx-auto py-16 px-6 lg:px-8 border-t border-[var(--border-color)]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                
                {/* Columna Izquierda: Info de contacto */}
                <div className='space-y-8'>
                    <div>
                        <h2 className='text-3xl sm:text-4xl font-bold tracking-tight mb-4'>Hablemos.</h2>
                        <p className='text-[var(--text-muted-color)] text-lg leading-relaxed max-w-md'>
                            ¿Tienes una idea en mente o buscas colaborar en un proyecto? 
                            Estoy abierto a nuevas oportunidades y retos.
                        </p>
                    </div>

                    <div className='space-y-6'>
                        <div className='flex items-center gap-4 group'>
                            <div className='p-3 rounded-lg bg-[var(--border-color)]/20 text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white transition-colors'>
                                <FaEnvelope className="w-5 h-5" />
                            </div>
                            <div>
                                <p className='text-xs uppercase tracking-widest text-[var(--text-muted-color)] font-bold'>Email</p>
                                <a href="mailto:jmanzanaresg27@gmail.com" className='text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors'>
                                    jmanzanaresg27@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className='flex items-center gap-4 group'>
                            <div className='p-3 rounded-lg bg-[var(--border-color)]/20 text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white transition-colors'>
                                <FaLinkedin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className='text-xs uppercase tracking-widest text-[var(--text-muted-color)] font-bold'>LinkedIn</p>
                                <a href="https://www.linkedin.com/in/jorge-manzanares-30b63223a/" className='text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors'>
                                    Jorge Manzanares Gaitán
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: El Formulario */}
                <ContactForm />
            </div>
        </section>
    ) 
}

export default ContactApp;