import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {

    @Get()
    listTasks() {
        return 'list tasks'
    }

    @Post()
    createTasks(@Body() body:CreateTaskDto) {
        return body;
    }

    @Get('/:id')
    getTasks(@Param('id') id:string) {
        return id;
    }
}
