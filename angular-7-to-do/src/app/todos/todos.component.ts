import {Component, OnInit} from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../mock-tasks';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }


  getTasks(): void {
    this.taskService.getTasks()
      .subscribe( task => this.tasks = task);
  }

  removeTask(id): void {
    this.taskService.removeTask(id, this.tasks)
      .subscribe( task => this.tasks = task);
  }
}
