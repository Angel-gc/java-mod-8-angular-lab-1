import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flatiron-angular';
  disableNewMessage = true;
  isActive = false;
  messages = [
    {
      sender: "Ludovic",
      message: "Latest message from Ludovic"
    },
    {
      sender: "Jessica",
      message: "Latest message from Jessica"
    }
  ]
  athletes = [
    {
      athlete: "Bill Russel",
      sport: "(Basketball)",
      status: "is not active"
    },
    {
      athlete: "Gabriela Sabanti",
      sport: "(Tennis)",
      status: "is not active"
    },
    {
      athlete: "Simone Biles",
      sport: "(Olympic Gymnast)",
      status: "is active"
    }
  ]
  getDisableNewMessage(){
    return this.disableNewMessage
  }
  onSendMessage() {
    let message = {
      sender: "Michael",
      message: "New message from Michael"
    }
    this.messages.push(message);
  }
  constructor() {
    console.log("Iniating angular AppCompnent class");
    setTimeout(() => {
      this.disableNewMessage = !this.disableNewMessage;
    }
    , 2000)
  }
}
