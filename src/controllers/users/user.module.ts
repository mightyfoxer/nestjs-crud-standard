import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRepositpory } from "./user.repository";
import { UserController } from "./user.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "src/models/user.model";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])
    ],
    providers: [UserService, UserRepositpory],
    controllers: [UserController]
})
export class UserModule {
    
}