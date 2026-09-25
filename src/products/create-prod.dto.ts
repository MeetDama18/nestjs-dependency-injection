import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProdDto{
    @IsNotEmpty()
    name: string;

    @IsNumber()
    price: number;
}