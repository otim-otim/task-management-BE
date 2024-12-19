import  prisma  from '../utils/prismaClient';
import { ETaskColor, ITaskCreateDTO, ITaskUpdateDTO } from '../types';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';



export async function getTasks() {
    try {
        return await prisma.task.findMany();
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw new Error('Failed to fetch tasks');
    }
}

export async function createTask(request : ITaskCreateDTO) {
    const {title, color} = request
    try {
        return await prisma.task.create({
            data: {
                title: title,
                color: color
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export async function updateTask(req : ITaskUpdateDTO, id : number) {
    const {title, color, isCompleted} = req
    
    try {
        return await prisma.task.update({
            where: {
                id: id
            },
            data: {
                title: title,
                color: color,
                isCompleted: isCompleted
            }
        });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (error.code === 'P2025') {
                // if the record is not found
                throw new Error(`Task with id ${id} not found`);
            }
        }
        // Re-throw other errors
        console.error('Error updating task:', error);
        throw error;
    }
}