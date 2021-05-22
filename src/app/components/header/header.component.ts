import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'task tracker';

  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private UIService: UiService, private router: Router) {

    // subscription stay here
    this.subscription = this.UIService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {


  }

  toggleAddTask(){
    console.log('toggoole add task');
    this.UIService.toggleAddTask();
  }


  // to check the route
  hasRoute(route: string){

    return this.router.url === route;

  }

}
