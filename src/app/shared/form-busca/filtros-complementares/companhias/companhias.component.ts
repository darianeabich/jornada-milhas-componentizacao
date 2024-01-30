import { Component } from '@angular/core';

@Component({
  selector: 'app-companhias',
  templateUrl: './companhias.component.html',
  styleUrls: ['./companhias.component.scss'],
})
export class CompanhiasComponent {
  opcoes = [
    {
      display: 'Gol',
      value: '0',
    },
    {
      display: 'Avianca',
      value: '1',
    },
    {
      display: 'Azul',
      value: '2',
    },
    {
      display: 'Latam',
      value: '3',
    },
  ];
}
