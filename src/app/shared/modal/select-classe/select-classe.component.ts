import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-classe',
  templateUrl: './select-classe.component.html',
  styleUrls: ['./select-classe.component.scss'],
})
export class SelectClasseComponent implements OnInit {
  @Input() control!: FormControl;
  stateOptions: any[] = [];
  formCategoria!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.stateOptions = [
      { label: 'Econômica', value: 'Econômica' },
      { label: 'Executiva', value: 'Executiva' },
    ];

    this.formCategoria = this.fb.group({
      tipo: ['Econômica'],
    });
  }
}
