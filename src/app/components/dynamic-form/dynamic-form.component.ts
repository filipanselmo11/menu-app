import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
  @Input() fields: {
    name: string;
    label: string;
    type: string
  }[] = [];
  formData: {
    [
    key: string
    ]: any
  } = {};

  onSubmit() {
    console.log('Form data: ', this.formData);
  }
}
