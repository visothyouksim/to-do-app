import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiEndpoint: string = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiEndpoint + '/api/tasks');
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiEndpoint + '/api/tasks', task);
  }

  markAsCompleted(task: Task): void {}

  deleteTask(task: Task): void {}
}
