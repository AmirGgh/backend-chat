import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from "src/user/user.schema";
import { UserDetails } from "src/utills/types";

@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {

    }
    async validateUser(details: UserDetails) {
        console.log('AuthService:')
        console.log(details)
        const user = await this.userModel.findOne({ email: details.email })
        if (user) {
            console.log(user)
            return user
        }
        console.log('user not found... creating')
        const newUser = await this.userModel.create(details)
        console.log(newUser)
        return newUser
    }
    async findUser(id: string) {
        const user = await this.userModel.findById({ id })
        console.log("findUser")
        console.log(user)
        return user
    }
}