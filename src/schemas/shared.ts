import * as v from 'valibot';

export const StringMin2Max100Schema = v.pipe(
  v.string(),
  v.trim(),
  v.minLength(2, 'The first_name must be 2 or more characters long.'), // TO DO: Mostrar ese message de acuerdo un locale que envíe el frontend en la request.
  v.maxLength(100, 'The first_name must not exceed 100 characters long.'), // TO DO: Mostrar ese message de acuerdo un locale que envíe el frontend en la request.
)

export const EmailSchema = v.pipe(
  v.string(),
  v.trim(),
  v.nonEmpty('Please enter your email.'),
  v.email('The email is badly formatted.'),
  v.maxLength(150, 'Your email is too long.'),
);

export const PasswordSchema = v.pipe(
  v.string(),
  v.trim(),
  v.minLength(8, 'La contraseña debe tener al menos 8 caracteres'),
  v.maxLength(100, 'La contraseña no puede superar los 100 caracteres'),
  v.regex(/[a-z]/, 'Debe contener al menos una letra minúscula'),
  v.regex(/[A-Z]/, 'Debe contener al menos una letra mayúscula'),
  v.regex(/[0-9]/, 'Debe contener al menos un número'),
  v.regex(/[^A-Za-z0-9\s]/, 'Debe contener al menos un carácter especial'),
  v.regex(/^\S+$/, 'No debe contener espacios') // Asegura que no haya espacios.
);