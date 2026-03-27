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
                reset();
            }
        } catch (error) {
            console.error('Error al enviar el mail');
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-card border border-border-custom p-8 md:p-10 space-y-6 rounded-[2rem] shadow-xl shadow-black/5 relative overflow-hidden"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">
                        Nombre Completo
                    </label>
                    <input
                        {...register('username')}
                        placeholder="Jorge Gaitán"
                        className="w-full px-5 py-4 bg-background rounded-2xl border border-border-custom text-main-text 
                                 placeholder:text-muted/30 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 
                                 outline-none transition-all duration-300 font-medium"
                    />
                    {errors.username && (
                        <p className="text-[9px] font-bold uppercase tracking-widest text-red-500 mt-1 ml-1">
                            {errors.username.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">
                        Tu Email
                    </label>
                    <input
                        type="email"
                        {...register('email')}
                        placeholder="tu@email.com"
                        className="w-full px-5 py-4 bg-background rounded-2xl border border-border-custom text-main-text 
                                 placeholder:text-muted/30 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 
                                 outline-none transition-all duration-300 font-medium"
                    />
                    {errors.email && (
                        <p className="text-[9px] font-bold uppercase tracking-widest text-red-500 mt-1 ml-1">
                            {errors.email?.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="space-y-2 text-left">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted ml-1">
                    Mensaje
                </label>
                <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    className="w-full px-5 py-4 bg-background rounded-2xl border border-border-custom text-main-text 
                             placeholder:text-muted/30 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 
                             outline-none transition-all duration-300 resize-none font-medium"
                />
                {errors.message && (
                    <p className="text-[9px] font-bold uppercase tracking-widest text-red-500 mt-1 ml-1">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] 
               transition-all duration-500 overflow-hidden
               bg-main-text text-background
               hover:scale-[1.02] active:scale-95 
               disabled:opacity-50 disabled:cursor-not-allowed 
               shadow-2xl shadow-primary/10 border border-transparent hover:border-primary/20"
            >
                <span className="relative z-10">
                    {isSubmitting ? 'Procesando...' : 'Enviar Propuesta'}
                </span>

                {/* Efecto de brillo dinámico */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                    dark:via-white/10 -translate-x-full group-hover:translate-x-full 
                    transition-transform duration-1000 ease-in-out" />
            </button>

            {isSubmitSuccessful && (
                <div className="mt-4 p-4 bg-green-500/5 border border-green-500/20 rounded-2xl animate-in fade-in zoom-in duration-500">
                    <p className="text-green-500 text-center text-[10px] font-black uppercase tracking-[0.2em]">
                        ✓ Mensaje enviado. ¡Hablemos pronto!
                    </p>
                </div>
            )}
        </form>
    );
}

export default ContactForm;