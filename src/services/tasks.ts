import  prisma  from '../utils/prismaClient';
import { ETaskColor, ITaskCreateDTO } from '../types';



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