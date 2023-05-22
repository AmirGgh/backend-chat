import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group } from './group.schema';

@Injectable()
export class GroupService {
    constructor(
        @InjectModel(Group.name) private groupModel: Model<Group>,
    ) { }

    async createGroup(groupData: Partial<Group>): Promise<Group> {
        const group = new this.groupModel(groupData);
        return group.save();
    }

    async getAllGroups(): Promise<Group[]> {
        return this.groupModel.find().exec();
    }

    async getGroupById(groupId: string): Promise<Group> {
        const group = await this.groupModel.findById(groupId).exec();
        if (!group) {
            throw new NotFoundException('Group not found');
        }
        return group;
    }

    async updateGroup(groupId: string, groupData: Partial<Group>): Promise<Group> {
        const updatedGroup = await this.groupModel
            .findById(groupId)
            .exec();

        if (!updatedGroup) {
            throw new NotFoundException('Group not found');
        }

        Object.assign(updatedGroup, groupData);

        return updatedGroup.save();
    }


    async deleteGroup(groupId: string): Promise<void> {
        const deletedGroup = await this.groupModel.findByIdAndRemove(groupId).exec();
        if (!deletedGroup) {
            throw new NotFoundException('Group not found');
        }
    }
}
