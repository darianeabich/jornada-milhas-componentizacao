import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadasComponent } from './paradas.component';

describe('ParadasComponent', () => {
  let component: ParadasComponent;
  let fixture: ComponentFixture<ParadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
