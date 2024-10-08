import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-new",
  templateUrl: "./new.page.html",
  styleUrls: ["./new.page.scss"],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class NewPage implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("NewPage initialized");
  }
}
