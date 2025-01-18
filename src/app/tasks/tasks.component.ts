import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NgFor, } from '@angular/common';
import { DUMMYTASKS } from './../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor],
templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true})  name!: string;
  @Input({required: true})  userId!:   string;

  tasks = DUMMYTASKS;

  get selectedUser() {
    return this.tasks.filter((entry) => entry.userId === this.userId)
  }



}
