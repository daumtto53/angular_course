
import { Task, TaskSubmit } from './task/task.model';
import { DUMMYTASKS } from './../dummy-tasks';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class TasksService {
    tasks = DUMMYTASKS;

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        } 
    }

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
        this.saveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}