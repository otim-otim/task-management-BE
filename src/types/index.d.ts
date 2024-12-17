export interface ITask {
    id: number;
    title: string;
    color: ETaskColor;
    isCompleted: boolean;
}


export interface ITaskCreateDTO {
    title: string;
    color: ETaskColor;
}

export interface ITaskUpdateDTO {
    title?: string;
    color?: ETaskColor;
    isCompleted?: boolean;
}

export const enum ETaskColor {
    Red = "red",
    Green = "green",
    Blue = "blue",
    Yellow = "yellow",
    Purple = "purple",
    Orange = "orange"
}