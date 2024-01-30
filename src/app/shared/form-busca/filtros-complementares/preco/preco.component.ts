import { Component } from '@angular/core';

@Component({
  selector: 'app-preco',
  templateUrl: './preco.component.html',
  styleUrls: ['./preco.component.scss'],
})
export class PrecoComponent {
  precoMin?: number = 200;
  precoMax?: number = 1500;
}
