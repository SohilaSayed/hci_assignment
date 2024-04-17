import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
})
export class TaskDetailsComponent implements OnInit {
  taskId:any;
  task:any;
  constructor(
    public route : ActivatedRoute , 
    public taskService : TasksService,
    private router : Router
    ){
  }
  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.tasks[this.taskId];
  }

  updateTask(){
    this.taskService.updateTask(this.taskId,this.task);
    this.router.navigate(['/']);
  }
  deleteTask(){
    this.taskService.deleteTask(this.taskId);
    this.router.navigate(['/']);

  }
}
