import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  senderName = "";
  senderMessage = "";

  athlete = "";
  sport = ""
  status = ""
  title = "flatiron-angular";
  messages = [
    {
      sender: "Ludovic",
      message: "Latest message from Ludovic",
    },
    {
      sender: "Jessica",
      message: "Latest message from Jessica",
    },
  ];

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
  constructor() {
    console.log("Iniating angular AppCompnent class");
  }

  onSendMessage() {
    let newMessage = {
      sender: this.senderName,
      message: this.senderMessage,
    };
    this.messages.push(newMessage);
  }

  onAdd() {
    let newAthlete = {
      athlete: this.athlete,
      sport: this.sport,
      status: this.status

    };
    this.athletes.push(newAthlete);
  }
}