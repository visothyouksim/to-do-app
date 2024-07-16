import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskCompleted = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<Task>();

  markAsCompleted(task: Task) {
    this.taskCompleted.emit(task);
  }

  deleteTask(task: Task) {
    this.taskDeleted.emit(task);
  }
}
