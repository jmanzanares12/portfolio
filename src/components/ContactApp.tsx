import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import SocialButton from '../shared/SocialButton';
import { SocialLinks } from '../utils/SocialLinks';

const ContactApp = () => {
    const form = useRef<HTMLFormElement>(null);
    const [sent, setSent] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs.sendForm('service_0irt72p', 'template_1jkdr5r', form.current, 'dMf31SIhJUjKwjaUj')
            .then(() => {
                setSent(true);
                form?.current?.reset();
            }).catch((error) => {
                console.error(error);
            });
    };

    return (
        <section className='min-h-screen py-10 px-5 text-[var(--text-color)] bg-[var(--bg-color)]'>
            <h3 className='text-center text-2xl font-bolt mb-4'>Contactame!</h3>
            <p className='text-center text-lg'>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarme.</p>
            
            <form 
                ref={form}
                onSubmit={sendEmail}
                className='max-w-xl mx-auto flex flex-col gap-4 items-center mt-16'
            >
                <label htmlFor="name" className='text-lg font-semibold'>Tu nombre</label>
                <input type="text" name='username' placeholder='Tu nombre' required className='px-4 py-2 rounded border bg-transparent border-[var(--primary-color)] text-[var(--text-color)] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <label htmlFor="email" className='text-lg font-semibold'>Tu correo</label>
                <input type="email" name='email' placeholder='Tu correo' required className='px-4 py-2 rounded border bg-transparent border-[var(--primary-color)] text-[var(--text-color)] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <label htmlFor="message" className='text-lg font-semibold'>Tu mensaje</label>
                <textarea name='message' placeholder='Tu mensaje' required className='px-4 py-2 rounded border bg-transparent border-[var(--primary-color)] text-[var(--text-color)] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <button type='submit' className='px-4 py-2 rounded bg-[var(--primary-color)] text-white hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out'>Enviar</button>
                {sent && <p className='text-center text-lg'>¡Gracias por contactarme! Te respondere lo antes posible.</p>}
            </form>

            <div className='mt-16 flex justify-center gap-6'>
                {SocialLinks.map(({ icon, link, name, className }, index) => (
                    <SocialButton key={index} icon={icon} link={link} name={name} className={className} />
                ))}
            </div>
        </section>
    )
}

export default ContactApp;