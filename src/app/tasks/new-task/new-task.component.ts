import { Component, EventEmitter, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskSubmit } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<TaskSubmit>

  titleInput='';
  summaryInput='';
  dateInput='';

  onCancelClick() {
    this.cancel.emit();
  }

  onSubmit() {
    this.submit.emit({
      title: this.titleInput,
      summary: this.summaryInput,
      date: this.dateInput,
    })
  }

}
