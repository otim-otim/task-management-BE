import  prisma  from '../utils/prismaClient';




export async function getTasks() {
    try {
        
        return await prisma.task.findMany();
    } catch (error) {
        console.log(error);
    }
}