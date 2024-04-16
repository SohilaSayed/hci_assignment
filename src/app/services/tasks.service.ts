import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [
    {
      title: 'HCI Assignment',
      description: 'deadline 18/4/2024',
      due_date: new Date(2024, 3, 18),
    },
    {
      title: 'HCI Task',
      description: 'deadline 18/4/2024',
      due_date: new Date(2024, 3, 18),
    },
  ];

  constructor() {}

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }

  saveTask(title: any, description: any, due_date: any) {
    this.tasks.push({
      title: title,
      description: description,
      due_date: due_date,
    });
  }
}
