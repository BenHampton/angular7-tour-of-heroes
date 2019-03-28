import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AppRoutingModule } from './app-routing.module';
import { IndividualTasksComponent } from './individual-tasks/individual-tasks.component';
import { ModifyTasksComponent } from './modify-tasks/modify-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    IndividualTasksComponent,
    ModifyTasksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
