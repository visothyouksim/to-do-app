import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskCompleted = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<Task>();

  updateTask(task: Task) {
    this.taskCompleted.emit(task);
    console.log(task);
  }

  deleteTask(task: Task) {
    this.taskDeleted.emit(task);
  }
}
