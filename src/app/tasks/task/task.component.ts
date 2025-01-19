import { Component, EventEmitter, Input, Output } from "@angular/core";
import { type Task } from "./task.model";
import { CardComponent } from './../../shared/card/card.component';
import { DatePipe } from "@angular/common";
import { TasksService } from "../tasks.service";

@Component({
  selector: "app-task",
templateUrl: "./task.component.html",
  styleUrl: "./task.component.css",
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter();

  constructor(private tasksService: TasksService) {
  }

  onComplete() {
    this.tasksService.removeTask(this.task.id);
  }  
}
