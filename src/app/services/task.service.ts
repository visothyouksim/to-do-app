import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiEndpoint: string = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiEndpoint + '/api/tasks');
  }

  addTask(task: Task): void {}

  markAsCompleted(task: Task): void {}

  deleteTask(task: Task): void {}
}
