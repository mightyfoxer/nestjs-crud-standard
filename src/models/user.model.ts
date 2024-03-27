import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import exp from 'constants';
import { Document, Schema as MongooseSchema, model } from "mongoose";

export interface Wallets extends Document  {
    chainId: string;
    address: string;
}

export interface User extends Document {
    nickName: string;
    wallet: Wallets[];
    password: string;
    avatar: string;
    lang: string;
    emailVerified: boolean;
    provider: string;
    accessToken: string;
    refreshToken: string;
    expiresAt: Date;
    twoFactor: boolean;
    contacts: MongooseSchema.Types.ObjectId[],
    status: number;
    createdAt: Date;
    updatedAt: Date;
}

@Schema({ timestamps: true })
export class SchemaData {

    @Prop()
    nickName: string;

    @Prop()
    wallet: Wallets[];

    @Prop()
    password: string;
    
    @Prop()
    avatar: string;

    @Prop()
    lang: string;

    @Prop()
    emailVerified: boolean;

    @Prop()
    provider: string;

    @Prop()
    accessToken: string;

    @Prop()
    refreshToken: string;
    
    @Prop()
    expiresAt: Date;

    @Prop({ required: true, default: false })
    twoFactor: boolean;

    @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Users'}] })
    contacts: MongooseSchema.Types.ObjectId[];

    @Prop({ default: 1 })
    status: number;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(SchemaData);

export const UserModel = model<User>('Users', UserSchema);