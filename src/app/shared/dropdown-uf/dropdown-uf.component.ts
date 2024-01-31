import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { Estado } from 'src/app/core/types/Estado.interface';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() control!: UntypedFormControl;
  @Input() placeholder: string = '';
  @Input() withIcon: boolean = true;

  ufs: Estado[] = [];

  constructor(private ufService: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.ufService.listar().subscribe((estados) => {
      this.ufs = estados;
    });
  }

  search(event: any) {
    const query = event.query;
    this.ufs = this.ufs.filter((uf) => {
      return uf.nome.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }
}
