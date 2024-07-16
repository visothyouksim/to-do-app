import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  newTask: string = '';
  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim().length > 0) {
      this.taskAdded.emit(this.newTask);
      this.newTask = '';
    }
  }
}
