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

export enum ETaskColor {
    RED = 'RED',
    BLUE = 'BLUE',
    GREEN = 'GREEN',
    YELLOW = 'YELLOW',
    PURPLE = 'PURPLE',
    ORANGE = 'ORANGE',
    GRAY = 'GRAY'
}