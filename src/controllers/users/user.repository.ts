import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectModel, Schema } from '@nestjs/mongoose';
import { User } from '../../models/user.model';
import mongoose, { Model, Schema as MongooseSchema } from 'mongoose';
import { CreateUserDto } from "./dto/create-user.dto";


@Injectable()
export class UserRepositpory {
    constructor(@InjectModel('Users') private readonly usersModel: Model<User>) { }

    async findUser(id: string) {
        const user = await this.usersModel
            .findById(id)
            .exec();       
        if (!user) {
            throw new NotFoundException();
        }
        return {
            user: user
        }
    }

    async createUser(userDto: CreateUserDto) {
        try {
            const doc = await new this.usersModel(userDto);
            console.log('doc -----------------> ', doc);
            return doc.save();
        } catch(e) {
            throw new InternalServerErrorException(),
            console.log('errors ------------> ', e);
        }
    }
}