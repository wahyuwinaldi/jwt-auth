import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsNumber,
} from 'class-validator';
export class CreateUserDto {
  @IsOptional()
  @IsNumber()
  id?: number;
  @IsNotEmpty()
  @IsString()
  username?: string;
  @IsNotEmpty()
  @IsString()
  name?: string;
  @IsOptional()
  @IsEmail()
  email?: string;
  @IsOptional()
  @IsString()
  password?: string;
  @IsOptional()
  @IsString()
  phone?: string;
  @IsOptional()
  @IsNumber()
  idOrganization?: number;
  @IsOptional()
  @IsString()
  roleCode?: string;
  @IsOptional()
  @IsString()
  requestedBy?: string;
}
