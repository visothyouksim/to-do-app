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
  newTask: string = '';
  tasks: Task[] = [];

  completedTasks: Task[] = [];

  addTask() {
    if (this.newTask.trim().length > 0) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
    if (task.completed) {
      this.completedTasks.push(task);
      this.tasks = this.tasks.filter(t => t !== task);
    } else {
      this.tasks.push(task);
      this.completedTasks = this.completedTasks.filter(t => t !== task);
    }
  }
}
