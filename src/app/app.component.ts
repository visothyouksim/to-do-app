import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Task } from './models/task.model';
import { TaskService } from './services/task.service';
import { OnInit } from '@angular/core';
import { ApiResponse } from './models/api-response';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(private storage: Storage, private taskService: TaskService) {
  }

  async ngOnInit(): Promise<void> {
    this.taskService.getTasks().subscribe((tasks: ApiResponse) => {
      this.tasks = tasks['hydra:member'];
    });
  }

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
