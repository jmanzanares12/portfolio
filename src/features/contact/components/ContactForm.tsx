import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '../validations/contact.schema';
import { ContactFormInputs } from '../types/contact.types';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset } = useForm<ContactFormInputs>({
            resolver: yupResolver(contactSchema),
        })

    const onSubmit = async (data: ContactFormInputs) => {
        console.log("Datos enviados: ", data);

        await new Promise((resolve) => setTimeout(resolve, 1500))
        reset();
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='max-w-xl w-full mx-auto bg-[var(--bg-card-color)] border border-[var(--border-color)] p-6 space-y-6 mt-10 sm:mt-12 rounded-2xl'
        >
            <div>
                <label htmlFor="username" className='block text-sm font-medium text-[var(--muted-text-color)] mb-2'>Nombre *</label>
                <input
                    {...register('username')}
                    placeholder='Nombre completo'
                    className='w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-[var(--primary-color)] text-[var(--text-color)] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {errors.username && (
                    <p className='text-red-500 text-xs font-medium mt-1'>{errors.username.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="email" className='block text-sm font-medium text-[var(--muted-text-color)] mb-2'>Correo electrónico *</label>
                <input
                    type='email'
                    {...register('email')}
                    placeholder='tu@example.com'
                    className='w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-[var(--primary-color)] text-[var(--text-color)] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {errors && (
                    <p className='text-red-500 text-xs font-medium mt-1'>{errors.email?.message}</p>
                )}
            </div>
            <div>
                <label htmlFor="message" className='block text-sm font-medium text-[var(--muted-text-color)] mb-2'>Mensaje *</label>
                <textarea
                    {...register('message')}
                    placeholder='Escribe tu mensaje...'
                    className='w-full px-4 py-2 text-sm sm:text-base rounded-lg border border-[var(--primary-color)] text-[var(--text-color)] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                />
                {errors.message && (
                    <p className='text-red-500 text-xs font-medium mt-1'>{errors.message.message}</p>
                )}
            </div>

            <div className='flex justify-end gap-4'>
                <button
                    type='submit'
                    disabled={isSubmitting}
                    className='px-4 py-2 rounded border border-[var(--border-color)] text-white bg-[var(--color-info)] hover:bg-[var(--color-info)]/80 transition-all disable:opacity-50 '
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </div>


            {isSubmitSuccessful && (
                <p className='text-green-400 text-center text-sm font-medium mt-2'>Gracias por contactarme! Te respondere lo antes posible 🙌</p>
            )}
        </form>
    )
}

export default ContactForm;