import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-depo',
  templateUrl: './card-depo.component.html',
  styleUrls: ['./card-depo.component.scss'],
})
export class CardDepoComponent implements OnInit {
  @Input() avatar: string = '';
  @Input() comentario: string = '';
  @Input() usuario: string = '';

  constructor() {}

  ngOnInit(): void {}
}
