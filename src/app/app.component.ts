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
      this.tasks = this.tasks.filter(t => t.completed === false);

      this.completedTasks = tasks['hydra:member'];
      this.completedTasks = this.completedTasks.filter(t => t.completed === true);
    });
  }

  addTask(taskName: string) {
    //this.tasks.push({ name: taskName, completed: false });
    this.taskService.addTask({ name: taskName, completed: false });
  }  

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
