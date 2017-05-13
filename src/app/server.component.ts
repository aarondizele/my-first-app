import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowedButton = false;
  ServerName = '';
  serverCreationStatus = 'No Server Activated';
  serverCreate = false; // Best practices for *ngIf
  serverList = ['UK Server','Finland Server998'];


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
   onInputClick(event:any){
    //  console.log(event)
   }

}
