import {
    Res,
    Controller,
    Body,
    Post,
    Get,
    HostParam,
    HttpStatus,
    Redirect
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    
    @Post()
    async create(@Res() res, @Body() body: CreateUserDto) {
        try {
            console.log('body -----------> ', body);
            const user = await this.userService.createUser(body);
            return res.status(HttpStatus.OK).json({
                msg: 'User created successfully',
                user: user,
            })
        } catch (e) {
            return res.status(e.status).json(e.response);
        }     
    }

    @Get()
    @Redirect('https://nestjs.com', 301)
    async get() {
        return "Hello";
    }
    @Get('host')
    getInfo(@HostParam('account') account: string) {
        console.log('account -----------> ', account);
        return account;
    }
}