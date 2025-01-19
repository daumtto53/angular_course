
import { Task, TaskSubmit } from './task/task.model';
import { DUMMYTASKS } from './../dummy-tasks';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class TasksService {
    tasks = DUMMYTASKS;

    getUserTasks(userId: string) {
        return this.tasks.filter((entry) => entry.userId === userId);
    }

    addTask(taskSubmit: TaskSubmit, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime.toString(),
            userId: userId,
            title: taskSubmit.title,
            summary: taskSubmit.summary,
            dueDate: taskSubmit.date
          });
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

}