import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/Task';
import { TASKS } from '../mock-task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }


// get all tasks
  getTasks(): Observable<Task[]> {

    // return TASKS;

    // use this when using observable
    // const tasks = of(TASKS);
    // return tasks;

    return this.http.get<Task[]>(this.apiUrl);

  }

  // delete task
  deleteTask(task: Task): Observable<Task[]> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task[]>(url);
  }


  // toggle reminder
  toggleReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }


  // add task
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, httpOptions);

  }



}
