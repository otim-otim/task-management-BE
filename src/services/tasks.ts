import  prisma  from '../utils/prismaClient';
import { TaskColor, ITask, ITaskCreateDTO, ITaskUpdateDTO } from '../types';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';



export async function getTasks() {
    try {
        const tasks =  await prisma.task.findMany();
        return tasks as unknown as ITask[]
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw new Error('Failed to fetch tasks');
    }
}

// In createTask function
export async function createTask(request: ITaskCreateDTO) {
    const { title, color   } = request;  
    
    try {
        return await prisma.task.create({
            data: {
                title,
                color: color as TaskColor | undefined
            }
        }) 
    } catch (error) {
        console.log(error);
        throw new Error('Failed to create task');
    }
}

export async function updateTask(req : ITaskUpdateDTO, id : number) {
    const {title, color, completed} = req
    
    try {
        return await prisma.task.update({
            where: {
                id: id
            },
            data: {
                ...(title !== undefined && { title }),
                ...(color !== undefined && { color }),
                ...(completed !== undefined && { completed })
            }
        }) 
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            
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

export async function deleteTask(id : number) {
    try {
        return await prisma.task.delete({
            where: {
                id: id
            }
        }) as unknown as ITask
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            
            if (error.code === 'P2025') {
                // if the record is not found
                throw new Error(`Task with id ${id} not found`);
            }
        }
        // Re-throw other errors
        console.error('Error deleting task:', error);
        throw error;
    }
}