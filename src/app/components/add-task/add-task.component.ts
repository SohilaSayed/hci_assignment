import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'], // Use 'styleUrls' instead of 'styleUrl'
})
export class AddTaskComponent implements OnInit {
  constructor(public taskService: TasksService, public router: Router) {}

  ngOnInit(): void {}

  saveTask(title: any, description: any, due_date: any,is_completed:any) {
    this.taskService.saveTask(title.value, description.value, due_date.value,is_completed.value); // Pass due date as Date object
    this.router.navigate(['/home']);
  }
}
