import { Task } from './task.model';

export class ApiResponse {
    'hydra:member' : Task[];
    'hydra:totalItems' : number;
}
