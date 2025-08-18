import * as yup from 'yup';

export const contactSchema = yup.object().shape({
    username: yup
        .string()
        .required('El nombre es obligatorio')
        .min(3, 'El nombre debe tener al menos 3 caracteres'),
    
    email: yup
        .string()
        .required('El email es obligatorio')
        .email('Debe ser un email valido'),

    message: yup
        .string()
        .required('El mensaje es obligatorio')
        .min(10, 'El mensaje debe tener al menos 10 caracteres'),
});