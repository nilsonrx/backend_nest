/* eslint-disable prettier/prettier */
import { IsString, Length, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto { 
    @IsString()
    @Length(2, 99)
    name: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Informe um e-mail válido' })
    @IsString()
    email: string;

    @Length(8, 16)
    @IsString({ message: 'Digite uma senha válida' })
    password: string;

    @Length(8, 16)
    @IsString({ message: 'Confirme sua senha por favor' })
    passwordConfirmation: string;


}