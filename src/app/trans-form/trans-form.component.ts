import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-trans-form",
  templateUrl: "./trans-form.component.html",
  styleUrls: ["./trans-form.component.scss"],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class TransFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("Transform on");
  }

  name = new FormControl("");
}
