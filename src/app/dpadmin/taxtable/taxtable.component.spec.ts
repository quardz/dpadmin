import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxtableComponent } from './taxtable.component';

describe('TaxtableComponent', () => {
  let component: TaxtableComponent;
  let fixture: ComponentFixture<TaxtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
