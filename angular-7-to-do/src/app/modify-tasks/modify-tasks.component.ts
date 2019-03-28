import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-modify-tasks',
  templateUrl: './modify-tasks.component.html',
  styleUrls: ['./modify-tasks.component.css']
})
export class ModifyTasksComponent implements OnInit {

  @Input() tasks;

  profileForm = new FormGroup({
    newTask: new FormControl(''),
    newAssignee: new FormControl('')
  });

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmitAddTask() {
    this.taskService.addTask(this.profileForm.value, this.tasks);
  }
}
