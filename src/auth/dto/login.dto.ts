/* eslint-disable prettier/prettier */
import { User } from ".prisma/client";
import { IsString, IsEmail } from "class-validator";

export class loginDto {

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}

export class AuthResponse {
    token: string;
    user: User;
}
