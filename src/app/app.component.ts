import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Tour of Heroes';
  name = '';
  serverId:number = 1241;
  serverStatus:string = 'offline';

  constructor(){ // master state when page loaded
    this.serverStatus = Math.random() > 0.2 ? 'online' : 'offline';
  }

  getServerStatus(){ // Is the method because we are in class, same concept with OOP Python
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green':'red';
  }

  ngOnInit(){}
}
