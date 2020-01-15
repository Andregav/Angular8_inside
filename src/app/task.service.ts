import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './data_task-types';
import { TASK } from './data_task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getDataTask(): Observable<Task[]> {
  		return of(TASK);
	}
}
