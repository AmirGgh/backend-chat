import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('group')
export class GroupController {
    constructor(private readonly groupService: GroupService) { }

    @Get()
    getAllGroups() {
        return this.groupService.getAllGroups();
    }

    @Get(':id')
    getGroupById(@Param('id') id: string) {
        return this.groupService.getGroupById(id);
    }

    @Post()
    createGroup(@Body() createGroupDto: CreateGroupDto) {
        return this.groupService.createGroup(createGroupDto);
    }

    @Patch(':id')
    updateGroup(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
        return this.groupService.updateGroup(id, updateGroupDto);
    }

    @Delete(':id')
    deleteGroup(@Param('id') id: string) {
        return this.groupService.deleteGroup(id);
    }
}
