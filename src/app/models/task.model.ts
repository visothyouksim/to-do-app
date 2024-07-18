export class Task {
  id?: number;
  '@id'?: string;
  name!: string;
  completed: boolean = false;
}
