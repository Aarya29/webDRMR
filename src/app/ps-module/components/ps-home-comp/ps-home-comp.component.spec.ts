import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsHomeCompComponent } from './ps-home-comp.component';

describe('PsHomeCompComponent', () => {
  let component: PsHomeCompComponent;
  let fixture: ComponentFixture<PsHomeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsHomeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsHomeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
