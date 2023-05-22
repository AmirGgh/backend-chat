import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
    ) { }

    async createUser(userData: Partial<User>): Promise<User> {
        const user = new this.userModel(userData);
        return user.save();
    }

    // just for develop
    async getAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async getUserById(userId: string): Promise<User> {
        const user = await this.userModel.findById(userId).exec();
        if (!user) {
            throw new NotFoundException('User not found')
        }
        return user;
    }

    async updateUser(userId: string, userData: Partial<User>): Promise<User> {
        const updateUser = await this.userModel.findById(userId).exec();
        if (!updateUser) {
            throw new NotFoundException('User not found')
        }
        Object.assign(updateUser, userData)
        return updateUser.save();
    }

    async deleteUser(userId: string): Promise<void> {
        const deletedUser = await this.userModel.findByIdAndRemove(userId).exec();
        if (!deletedUser) {
            throw new NotFoundException('User not found');
        }
    }
    async getUserByUsername(username: string): Promise<User> {
        const user = await this.userModel.findOne({ username }).exec();
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}
