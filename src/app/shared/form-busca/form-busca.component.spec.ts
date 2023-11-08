import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuscaComponent } from './form-busca.component';

describe('FormBuscaComponent', () => {
  let component: FormBuscaComponent;
  let fixture: ComponentFixture<FormBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
