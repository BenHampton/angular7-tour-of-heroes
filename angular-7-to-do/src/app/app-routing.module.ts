import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import {IndividualTasksComponent} from './individual-tasks/individual-tasks.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'todos/:assignee',
    component: IndividualTasksComponent
  },
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/todos'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
