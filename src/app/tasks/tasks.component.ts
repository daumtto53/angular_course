import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NgFor, NgIf} from '@angular/common';
import { DUMMYTASKS } from './../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskSubmit } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent,
    NgFor, NgIf,
  ],
templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true})  name!: string;
  @Input({required: true})  userId!:   string;

  isAddTaskClicked = false;

  tasks = DUMMYTASKS;

  get selectedUser() {
    return this.tasks.filter((entry) => entry.userId === this.userId)
  }

  onComplete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddTaskClick() {
    this.isAddTaskClicked = true;
    console.log(this.isAddTaskClicked);
  }

  onAddTaskCanceled() {
    this.isAddTaskClicked = false;
  }

  onTaskAdded(taskSubmit: TaskSubmit) {
    this.tasks.unshift({
      id: new Date().getTime.toString(),
      userId: this.userId,
      title: taskSubmit.title,
      summary: taskSubmit.summary,
      dueDate: taskSubmit.date,
    })
    this.isAddTaskClicked = false;
  }

}
