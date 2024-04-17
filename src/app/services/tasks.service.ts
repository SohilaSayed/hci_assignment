import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];

  constructor() {
    let storedTasks = localStorage.getItem('tasks');
    if(storedTasks){
      this.tasks = JSON.parse(storedTasks);
    }
    else{
      this.tasks = [];
    }
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    this.storeTasks();
  }
  onCheck(i: number) {
    this.tasks[i].is_completed = !this.tasks[i].is_completed;
    this.storeTasks();
  }

  updateTask(id : any,item:any){
    this.tasks[id] = item;
    this.storeTasks();
  }

  saveTask(title: any, description: any, due_date: any,is_completed :any) {
    this.tasks.push({
      title: title,
      description: description,
      due_date: due_date,
      is_completed
    });
    this.storeTasks();
  }

  storeTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }
}
