import { Body, Controller, Post, Get, Param, Delete, Patch, Query} from '@nestjs/common';

import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}
     
    @Post()
    registerUser(@Body() createUserDto: CreateUserDto){
        return this.usersService.registerUser(createUserDto);
    }

    @Get()
    getUsers(){
    return this.usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string){
         return this.usersService.getUserById(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
         return this.usersService.deleteUser(id);
    }

    @Patch(':id')
    updateUser(@Param('id') id: string,
                @Body() updatedData: any){
        return this.usersService.updateUser(id, updatedData);
    }
}
