import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClasseComponent } from './select-classe.component';

describe('SelectClasseComponent', () => {
  let component: SelectClasseComponent;
  let fixture: ComponentFixture<SelectClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectClasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
