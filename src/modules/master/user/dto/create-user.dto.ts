import { IsString, IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
export class CreateUserDto {
    @IsNumber()
    @IsOptional()
    id?: number;

    @IsString()
    @IsNotEmpty()
    username?: string;

    @IsString()
    @IsNotEmpty()
    name?: string;

    @IsEmail()
    @IsNotEmpty()
    email?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsNumber()
    @IsOptional()
    idOrganization?: number;

    @IsString()
    @IsNotEmpty()
    requestedBy?: string;

}
