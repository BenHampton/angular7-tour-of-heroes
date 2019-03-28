import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task: Task[];

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }

  getTask(assignee: string): Observable<Task[]> {
    return of(TASKS.filter( task => task.assignee === assignee));
  }

  addTask(task: Task, tasks: Task[]): Observable<Task[]> {
    tasks.push(
      {
        id: tasks[tasks.length - 1 ].id + 1,
        task: task.newTask,
        assignee: task.newAssignee
      }
    );
    return of(tasks);
  }

  removeTask(id: number, tasks: Task[]): Observable<Task[]> {
    this.task = tasks.filter( task => task.id !== id);
    return of(this.task);
  }
}
