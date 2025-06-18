import * as v from 'valibot';
import { EmailSchema, PasswordSchema } from '../shared.js';

// TO DO: Los números vienen del schema.prisma. Sería ideal que eso se pueda parametrizar.

export const RegisterSchema = v.object({
  first_name: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(2, 'The first name must be 2 or more characters long.'), // TO DO: Mostrar ese message de acuerdo un locale que envíe el frontend en la request.
    v.maxLength(100, 'The first name must not exceed 100 characters long.'), // TO DO: Mostrar ese message de acuerdo un locale que envíe el frontend en la request.
    v.regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+$/, 'Only letters without spaces or special characters are allowed.')
  ),
  last_name: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(2, 'The last name must be 2 or more characters long.'), // TO DO: Mostrar ese message de acuerdo un locale que envíe el frontend en la request.
    v.maxLength(100, 'The last name must not exceed 100 characters long.'), // TO DO: Mostrar ese message de acuerdo un locale que envíe el frontend en la request.
    v.regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+$/, 'Only letters without spaces or special characters are allowed.')
  ),
  email: EmailSchema,
  password: PasswordSchema,
})

export type RegisterData = v.InferOutput<typeof RegisterSchema>;