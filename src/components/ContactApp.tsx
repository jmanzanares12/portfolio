import ContactForm from '../features/contact/components/ContactForm';

const ContactApp = () => {
    return (
        <section className='min-h-screen py-16 px-6 md:px-20 lg:px-40 bg-[var(--bg-color)] text-[var(--text-color)]'>
            <h2 className='text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>¡Contáctame!</h2>
            <p className='text-center mx-auto text-base sm:text-lg lg:text-xl max-w-2xl text-[var(--muted-text-color)] mb-4'>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarme.</p>
            <ContactForm />
        </section>
    ) 
}

export default ContactApp;