import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Passagem } from 'src/app/core/types/Passagem.interface';

@Component({
  selector: 'app-card-passagem',
  templateUrl: './card-passagem.component.html',
  styleUrls: ['./card-passagem.component.scss'],
})
export class CardPassagemComponent implements OnInit {
  @Input() passagem!: Passagem;
  @Output() comprarPassagem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  comprar() {
    this.comprarPassagem.emit(this.passagem);
  }
}
