import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../validations/contact.schema';
import { ContactFormInputs } from '../types/contact.types';
import { FORMSPREE_API } from '../../../api/mail.api';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset } = useForm<ContactFormInputs>({
            resolver: yupResolver(contactSchema),
        })

    const onSubmit = async (data: ContactFormInputs) => {
        try {
            const response = await fetch(FORMSPREE_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Datos enviados correctamente');
                reset();
            } else {
                console.error('Error al enviar el mail', await response.json());
            }
        } catch (error) {
            console.log('Error al enviar el mail');
        }
    }


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full bg-[var(--bg-contact-card-color)] border border-[var(--border-color)] p-8 space-y-5 rounded-2xl shadow-sm'
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className='text-xs font-bold uppercase tracking-widest text-[var(--text-muted-color)] ml-1'>Nombre</label>
                    <input
                        {...register('username')}
                        placeholder='John Doe'
                        className='w-full px-4 py-3 bg-[var(--bg-color)] rounded-xl border border-[var(--border-color)] text-[var(--text-color)] focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all placeholder:opacity-30'
                    />
                    {errors.username && <p className='text-red-500 text-[10px] font-bold uppercase ml-1'>{errors.username.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className='text-xs font-bold uppercase tracking-widest text-[var(--text-muted-color)] ml-1'>Email</label>
                    <input
                        type='email'
                        {...register('email')}
                        placeholder='tu@email.com'
                        className='w-full px-4 py-3 bg-[var(--bg-color)] rounded-xl border border-[var(--border-color)] text-[var(--text-color)] focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all placeholder:opacity-30'
                    />
                    {errors.email && <p className='text-red-500 text-[10px] font-bold uppercase ml-1'>{errors.email?.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label className='text-xs font-bold uppercase tracking-widest text-[var(--text-muted-color)] ml-1'>Mensaje</label>
                <textarea
                    {...register('message')}
                    rows={4}
                    placeholder='¿En qué puedo ayudarte?'
                    className='w-full px-4 py-3 bg-[var(--bg-color)] rounded-xl border border-[var(--border-color)] text-[var(--text-color)] focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all resize-none placeholder:opacity-30'
                />
                {errors.message && <p className='text-red-500 text-[10px] font-bold uppercase ml-1'>{errors.message.message}</p>}
            </div>

            <button
                type='submit'
                disabled={isSubmitting}
                className='w-full py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs transition-all 
                bg-[var(--primary-color)] text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[var(--primary-color)]/20'
            >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {isSubmitSuccessful && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <p className='text-green-400 text-center text-xs font-bold uppercase tracking-wider'>
                        ¡Recibido con éxito! Te responderé pronto.
                    </p>
                </div>
            )}
        </form>
    );
}

export default ContactForm;