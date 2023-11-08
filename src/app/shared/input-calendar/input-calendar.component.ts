import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.scss'],
})
export class InputCalendarComponent implements OnInit {
  @Input() label: string = '';
  @Input() control!: FormControl;

  constructor() {}

  ngOnInit(): void {}
}
