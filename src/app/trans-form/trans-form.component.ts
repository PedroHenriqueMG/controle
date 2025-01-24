import { NgIf } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  IonButton,
  IonDatetime,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonSelect,
  IonSelectOption,
  IonTextarea,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-trans-form",
  templateUrl: "./trans-form.component.html",
  styleUrls: ["./trans-form.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    IonInput,
    IonTextarea,
    IonDatetime,
    IonModal,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonLabel,
    IonItem,
    IonList,
    ReactiveFormsModule,
  ],
})
export class TransFormComponent implements OnInit {
  myForm!: FormGroup;
  formStatus = signal<string>(""); // Signal to track form status
  constructor(private formBuilder: FormBuilder) {}

  private today = new Date().toISOString().split("T")[0];

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      type: ["", Validators.required],
      amount: ["", Validators.required],
      category: ["", Validators.required],
      date: [this.today],
      account: ["", Validators.required],
      repeat: ["", Validators.required],
      note: [""],
    });

    // Subscribe to form status changes using Signals
    this.myForm.statusChanges.subscribe((status) => {
      this.formStatus.set(status);
    });
  }
  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.formStatus.set("Form submitted successfully!");
    } else {
      this.validateAllFormFields(this.myForm);
      this.formStatus.set("Form contains errors.");
    }
  }
  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control?.markAsTouched();
      }
    });
  }
  updateDate(event: CustomEvent): void {
    this.myForm.patchValue({
      date: event.detail.value,
    });
    const modal = document.querySelector("ion-modal");
    if (modal) {
      modal.dismiss();
    }
  }
}
