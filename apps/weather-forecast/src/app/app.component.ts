import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormField } from './models';

@Component({
  selector: 'angular-dev-test-task-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  foreCastForm!: FormGroup;
  dynamicFormFields!: DynamicFormField[];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.foreCastForm = this.fb.group({});

    this.dynamicFormFields = [
      { id: 'dynamicText', type: 'text' },
      {
        id: 'dynamicRadio',
        type: 'radio',
        value: 'days',
        radioMenuOptions: { hours: 'Hours', days: 'Days' },
      },
    ];

    this.dynamicFormFields.forEach((formItem) => {
      const formControl = this.fb.control(formItem.value);
      this.foreCastForm.addControl(formItem.id, formControl);
    });
  }
}
