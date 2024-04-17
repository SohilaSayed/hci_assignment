import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  taskId:any;
  task:any;
  constructor(public taskService: TasksService , private router : Router) {}
  ngOnInit(): void {}
  deleteTask(i: number) {
    this.taskService.deleteTask(i);
  }
  updateTask(){
    this.taskService.updateTask(this.taskId,this.task);
    this.router.navigate(['/']);
  }
  onCheck(i:number) {
    this.taskService.onCheck(i);
  }
}
