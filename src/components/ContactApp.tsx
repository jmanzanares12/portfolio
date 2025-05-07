import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import SocialButton from '../shared/SocialButton';
import { getIconByName } from '../shared/IconMapper';
import { socialLinks } from '../utils/socalLinks';

const ContactApp = () => {
    const form = useRef<HTMLFormElement>(null);
    const [sent, setSent] = useState(false);

    const [sending, setSending] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setSending(true);

        emailjs.sendForm('service_0irt72p', 'template_1jkdr5r', form.current, 'dMf31SIhJUjKwjaUj')
            .then(() => {
                setSent(true);
                setSending(false);
                form?.current?.reset();
            }).catch((error) => {
                console.error(error);
                setSending(false);
            });
    };

    return (
        <section className='min-h-screen py-10 px-5 text-[var(--text-color)] bg-[var(--bg-color)]'>
            <h3 className='text-center text-2xl font-bolt mb-4'>Contactame!</h3>
            <p className='text-center text-lg'>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarme.</p>

            <form
                ref={form}
                onSubmit={sendEmail}
                className='max-w-xl w-full mx-auto bg-white/10 backdrop-blur-lg rounded-2xl flex flex-col shadow-lg p-8 space-y-6 mt-16'
            >
                <div>
                    <label htmlFor="username" className='block text-sm font-medium text-[var(--muted-text-color)] mb-1'>Nombre completo *</label>
                    <input
                        type="text"
                        id='username'
                        name='username'
                        placeholder='Nombre completo'
                        required
                        className='w-full px-4 py-2 rounded-lg border border-[var(--primary-color)] text-[var(--text-color)] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div>
                    <label htmlFor="email" className='block text-sm font-medium text-[var(--muted-text-color)] mb-1'>Correo electrónico *</label>
                    <input
                        type="email"
                        id='email'
                        name='email'
                        placeholder='Correo electrónico'
                        required
                        className='w-full px-4 py-2 rounded-lg border border-[var(--primary-color)] text-[var(--text-color)] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                <div>
                    <label htmlFor="message" className='block text-sm font-medium text-[var(--muted-text-color)] mb-1'>Mensaje *</label>
                    <textarea
                        id='message'
                        name='message'
                        placeholder='Mensaje'
                        required
                        className='w-full px-4 py-2 rounded-lg border border-[var(--primary-color)] text-[var(--text-color)] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                    />
                </div>
                
                <button 
                    type='submit' 
                    className='px-4 py-2 rounded bg-[var(--primary-color)] text-white hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out'
                >
                    {sending ? 'Enviando...' : 'Enviar'}
                </button>

                {sent && (
                    <p role='alert' className='text-center text-green-400 font-medium mt-2 animate-fade-in'>
                        ¡Gracias por contactarme! Te respondere lo antes posible.
                    </p>
                )
                }
            </form>

            <div className='mt-16 flex justify-center gap-6'>
                {socialLinks.map(({iconName, link, name, className}) => (
                    <SocialButton
                        key={name}
                        icon={getIconByName(iconName)}
                        link={link}
                        name={name}
                        className={className}
                    />
                ))}
            </div>
        </section>
    )
}

export default ContactApp;