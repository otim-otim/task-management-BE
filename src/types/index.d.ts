export type TaskColor = 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'orange' | 'gray';

export interface ITask {
    id: number;
    title: string;
    color: TaskColor;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface ITaskCreateDTO {
    title: string;
    color: TaskColor;
}

export interface ITaskUpdateDTO {
    title?: string;
    color?: TaskColor;
    completed?: boolean;
}