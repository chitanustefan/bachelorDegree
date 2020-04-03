import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordonatorComponent } from './coordonator.component';

describe('CoordonatorComponent', () => {
  let component: CoordonatorComponent;
  let fixture: ComponentFixture<CoordonatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordonatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
