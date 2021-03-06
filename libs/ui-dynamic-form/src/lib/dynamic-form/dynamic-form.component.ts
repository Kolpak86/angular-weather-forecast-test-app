import { DynamicFormField } from '@angular-dev-test-task/api-interfaces';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'angular-dev-test-task-ui-dynamic-form',
  template: `
    <ng-container [formGroup]="form">
      <ng-container [ngSwitch]="formItem.type">
        <div *ngSwitchCase="'text'">
          <input
            type="text"
            placeholder="Search.."
            [formControlName]="formItem.id"
          />
        </div>
        <ng-container *ngSwitchDefault>
          <label
            *ngFor="let option of formItem.radioMenuOptions | keyvalue"
            [for]="'option-' + option.key"
            class="l-radio"
          >
            <input
              type="radio"
              [id]="'option-' + option.key"
              [value]="option.key"
              [formControlName]="formItem.id"
            />
            <span>{{ option.value }}</span>
          </label>
        </ng-container>
      </ng-container>
    </ng-container>
  `,
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent {
  @Input() formItem!: DynamicFormField;

  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = this.rootFormGroup.control;
  }
}
