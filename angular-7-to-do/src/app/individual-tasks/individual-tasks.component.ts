import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../task.service';
import {Task} from '../task';

@Component({
  selector: 'app-individual-tasks',
  templateUrl: './individual-tasks.component.html',
  styleUrls: ['./individual-tasks.component.css']
})
export class IndividualTasksComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getIndividualTask();
  }

  getIndividualTask(): void {
    const assignee = this.activatedRoute.snapshot.paramMap.get('assignee');
    this.taskService.getTask(assignee)
      .subscribe( task => this.tasks = task);
  }

}
