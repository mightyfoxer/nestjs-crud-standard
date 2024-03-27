import { Injectable } from "@nestjs/common";
import { UserRepositpory } from "./user.repository";
import { CreateUserDto } from "./dto/create-user.dto";

interface Repo {
    findUser(id: string);
    createUser(userDto: CreateUserDto);
}
@Injectable()
export class UserService {
    repo: Repo;
    constructor(private userRepo: UserRepositpory) {
        this.repo = userRepo;
    }
    async findUser(id: string) {
        this.repo.findUser(id);
    }
    async createUser(userDto: CreateUserDto) {
        this.repo.createUser(userDto);
    }
}