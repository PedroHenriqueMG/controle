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
  selector: "app-transactions",
  templateUrl: "./transactions.page.html",
  styleUrls: ["./transactions.page.scss"],
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
export class TransactionsPage implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("TransactionsPage initialized");
  }
}
