import { Component } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tasks: Task[] = [];

  completedTasks: Task[] = [];

  addTask(taskName: string) {
    this.tasks.push({ name: taskName, completed: false });
  }

  markAsCompleted(task: Task) {
    task.completed = true;
    this.completedTasks.push(task);
    this.tasks = this.tasks.filter(t => t !== task);
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
