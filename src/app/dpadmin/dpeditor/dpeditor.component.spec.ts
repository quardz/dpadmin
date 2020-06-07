import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpeditorComponent } from './dpeditor.component';

describe('DpeditorComponent', () => {
  let component: DpeditorComponent;
  let fixture: ComponentFixture<DpeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
