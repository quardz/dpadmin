import { Component,OnInit, Injectable, Injector } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Params } from '@angular/router';
import { WpcoreService } from './core/wpcore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dp-admin';


  constructor(
      private wpcore: WpcoreService,  
      private injector: Injector,
      private route: ActivatedRoute,
    ) {  
  }

  OnInit() { }

} 

  
