import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  // selector: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  animations: [
    trigger('myAninamtion', [
      state('small', style({
        transfom: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)'
      })),
      transition('small <=> large', animate('300ms ease-in'))
    ])
  ]
})
export class ServerComponent implements OnInit {

  allowedButton = false;
  ServerName = '';
  serverCreationStatus = 'No Server Activated';
  serverCreate = false; // Best practices for *ngIf
  serverList = ['UK Server','Finland Server998'];


  state: string = 'small';

  animateMe(): void {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  constructor() {
    setTimeout(() => {
      this.allowedButton = true;
    }, 3000);
   }

  ngOnInit() {
  }

   onCreateServer(){
     this.serverList.push(this.ServerName)
     this.serverCreate = true;
     this.serverCreationStatus = 'Server Activated! Name is ' + this.ServerName;
   }



}
