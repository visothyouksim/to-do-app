import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-completed-task-list',
  templateUrl: './completed-task-list.component.html',
  styleUrls: ['./completed-task-list.component.scss']
})
export class CompletedTaskListComponent {
  @Input() completedTasks: Task[] = [];
}
