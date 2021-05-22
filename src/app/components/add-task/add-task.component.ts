import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/Task';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter;

  // when there's forn need to declare the field here
  text: string;
  day: string;
  reminder: boolean = false;

  showAddTask: boolean;
  subscription: Subscription;

  constructor(private UIService: UiService) {
    this.subscription = this.UIService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  onSubmit(){

    if( !this.text ){
      alert('Please add task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // todo emit event
    // emit newTask as the new object
    this.onAddTask.emit(newTask);



// initialise the form / empty the form
    this.text = '';
    this.day = '';
    this.reminder = false;


    console.log('submitting');
  }

}
