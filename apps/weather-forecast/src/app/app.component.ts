import {
  DynamicFormField,
  TimeTemperature,
} from '@angular-dev-test-task/api-interfaces';
import {
  AppState,
  changeDailyHourly,
  clearWeatherForecast,
  fetchGeo,
} from '@angular-dev-test-task/core-state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'angular-dev-test-task-root',
  templateUrl: './app.component.html',
  styles: [
    `
      header,
      main,
      section {
        display: flex;
        justify-content: center;
      }
      main {
        margin-top: 1rem;
      }
    `,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  foreCastForm!: FormGroup;
  dynamicFormFields!: DynamicFormField[];

  private subscription = new Subscription();

  get search(): AbstractControl | null {
    return this.foreCastForm.get('dynamicText');
  }

  get radio(): AbstractControl | null {
    return this.foreCastForm.get('dynamicRadio');
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.foreCastForm = this.fb.group({});

    this.dynamicFormFields = [
      { id: 'dynamicText', type: 'text' },
      {
        id: 'dynamicRadio',
        type: 'radio',
        value: TimeTemperature.hourly,
        radioMenuOptions: {
          [TimeTemperature.hourly]: 'Hours',
          [TimeTemperature.daily]: 'Days',
        },
      },
    ];

    this.dynamicFormFields.forEach((formItem) => {
      const formControl = this.fb.control(formItem.value);
      this.foreCastForm.addControl(formItem.id, formControl);
    });

    this.subscription.add(
      this.search?.valueChanges.pipe(debounceTime(400)).subscribe((name) => {
        if (name) {
          this.store.dispatch(fetchGeo({ name }));
        } else {
          this.store.dispatch(clearWeatherForecast());
        }
      })
    );
    this.subscription.add(
      this.radio?.valueChanges.subscribe((timeTemperatureOpt) => {
        this.store.dispatch(changeDailyHourly({ timeTemperatureOpt }));
      })
    );
  }
}
