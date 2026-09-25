import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty({message: 'Name is required'})
    name: string;

    @IsEmail({}, {message: 'Email must be valid'})
    email: string;
}