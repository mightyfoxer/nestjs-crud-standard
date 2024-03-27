import { Injectable } from "@nestjs/common";
import { IsString, IsEmpty, IsNotEmpty } from "class-validator";
import { Wallets } from "src/models/user.model";


@Injectable()
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    nickName: string;

    @IsNotEmpty()
    wallet: Wallets[];

    @IsString()
    @IsNotEmpty()
    password: string;
    avatar: string;
    lang: string;
    emailVerified: boolean;
    provider: string;
    accessToken: string;
    refreshToken: string;
    expiresAt: Date;
    twoFactor: boolean;
    contacts: string[];
    status: number;
    createdAt: Date;
    updatedAt: Date;
}