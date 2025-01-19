import { Component, EventEmitter, inject, Input, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskSubmit } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true})  userId!: string
  @Output() close = new EventEmitter<void>();

  private taskService = inject(TasksService);

  titleInput='';
  summaryInput='';
  dateInput='';

  onCloseClick() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.titleInput,
      summary: this.summaryInput,
      date: this.dateInput,
    }, this.userId);
    this.close.emit();
  }

}
