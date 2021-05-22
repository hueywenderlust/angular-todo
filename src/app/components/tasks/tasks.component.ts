import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TASKS } from '../../mock-task';
import { TaskService } from '../../services/task.service';
import { Currency } from 'src/app/models/Currency';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // tasks: Task[] = TASKS;
  tasks: Task[] = [];

  currency: Currency;


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task){
    // delete from the server and rerender the UI
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter( t => t.id !== task.id)));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    console.log('set reminder', task.reminder);
    this.taskService.toggleReminder(task).subscribe();
  }

  // add task
  addTask(task: Task){
    console.log(task);
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

}
