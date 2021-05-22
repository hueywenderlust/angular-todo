import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  // font awesome icon
  faTimes = faTimes;

  // reference interface(model)
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();


  constructor(private taskService: TaskService ) { }

  ngOnInit(): void {
  }

  onDelete(task){
    console.log('delete task' , task);
    this.onDeleteTask.emit(task);

  }

  onToggle(task){
    console.log('on toggle reminder');
    this.onToggleReminder.emit(task);
  }

}
