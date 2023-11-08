import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDepoComponent } from './card-depo.component';

describe('CardDepoComponent', () => {
  let component: CardDepoComponent;
  let fixture: ComponentFixture<CardDepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
