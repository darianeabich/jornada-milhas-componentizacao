import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCalendarComponent),
      multi: true,
    },
  ],
})
export class InputCalendarComponent implements ControlValueAccessor {
  @Input() label: string = '';
  // @Input() control: FormControl = new FormControl();
  @Input() identify: string = '';

  dateSelected: number | null = null;

  protected value: Date = new Date();
  protected disabled?: boolean;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {}

  writeValue(value: any): void {
    this.value = value;
  }

  selected(i: number, date: Date) {
    this.dateSelected = i;
    this.value = date;
    this.writeValue(date);
    this.onChange(date);
    this.onTouched();
    // this.onModelChange(date);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // onModelChange(value: any) {
  //   this.value = value;
  //   this.control.setValue(value);
  // }

  // writeValue(obj: any): void {
  //   this.control.setValue(obj);
  // }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    // isDisabled ? this.control.disable() : this.control.enable();
  }
}
