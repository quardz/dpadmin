import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpimportComponent } from './wpimport.component';

describe('WpimportComponent', () => {
  let component: WpimportComponent;
  let fixture: ComponentFixture<WpimportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpimportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
