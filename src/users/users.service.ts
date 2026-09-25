import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class UsersService {
    private users: any[] = [];

    constructor(private readonly logger: LoggerService) {}
    registerUser(createUserDto: CreateUserDto) {
    // 1. Create a new user object that includes an auto-generated id
    const newUser = {
      id: this.users.length + 1, // generates 1, 2, 3...
      ...createUserDto,
    };

    // 2. Save the user with id into the array
    this.users.push(newUser);

    this.logger.log(`New user registered: ${newUser.name}`);

    // 3. Return the saved user object containing the id
    return {
      message: 'User registered via service',
      data: newUser,
    };
  }

    getAllUsers(){
        return this.users;
    }

    getUserById(id: string | number) {
  return this.users.find((u) => Number(u.id) === Number(id));
}


    deleteUser(id: string){
         const index = +id;
        if(index<0 || index > this.users.length){
            return{message: `User with id ${id} not found!`}
        }
        
        const deleteUser = this.users.splice(index,1);
        return{
            message: `User with id ${id} deleted`,
            deleted: deleteUser[0],
        }
    }

    updateUser(id: string, updatedData: any){
        const index = +id;
        if(index<0 || index > this.users.length){
            return{message: `User with id ${id} not found!`}
        }
        
        const existingUser = this.users[index];
        const updatedUser = {...existingUser,...updatedData};

        this.users[index] = updatedUser;

        return{
            message : `User with id ${id} updated successfully`,
            user : updatedUser,
        }

    }
}
