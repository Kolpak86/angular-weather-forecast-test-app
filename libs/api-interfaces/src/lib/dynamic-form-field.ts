import { TimeTemperature } from './time-temperature';

export interface DynamicFormField {
  id: string;
  type: 'text' | 'radio';
  radioMenuOptions?: { [key: string]: string };
  value?: string | TimeTemperature;
}
