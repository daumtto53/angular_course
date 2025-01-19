import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  // imports: [TaskComponent, NewTaskComponent, NgFor, NgIf, ],
templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true})  name!: string;
  @Input({required: true})  userId!:   string;

  isAddTaskClicked = false;

  constructor(private tasksService: TasksService) {
  }

  get selectedUser() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddTaskClick() {
    this.isAddTaskClicked = true;
  }

  onAddTaskCanceled() {
    this.isAddTaskClicked = false;
  }

}
