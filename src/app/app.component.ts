import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
    this.loadTasks();
  }

  async loadTasks() {
    const tasks = await this.storage.get('tasks');
    const completedTasks = await this.storage.get('completedTasks');
    if (tasks !== null) {
      this.tasks = tasks;
    }
    if (completedTasks !== null) {
      this.completedTasks = completedTasks;
    }
  }

  async saveTasks() {
    await this.storage.set('tasks', this.tasks);
    await this.storage.set('completedTasks', this.completedTasks);
  }

  addTask(taskName: string) {
    this.tasks.push({ name: taskName, completed: false });
    this.saveTasks();
  }

  markAsCompleted(task: Task) {
    task.completed = true;
    this.completedTasks.push(task);
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }
}
