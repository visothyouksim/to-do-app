import { Component, Input } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-completed-task-list',
  templateUrl: './completed-task-list.component.html',
  styleUrls: ['./completed-task-list.component.scss']
})
export class CompletedTaskListComponent {
  @Input() completedTasks: Task[] = [];
}
