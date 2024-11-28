import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  nombre: string;

  @IsEmail(
    {},
    { message: 'El email debe ser una dirección de correo electrónico válida' },
  )
  email: string;
}
