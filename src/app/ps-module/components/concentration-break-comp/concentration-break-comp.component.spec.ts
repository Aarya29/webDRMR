import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationBreakCompComponent } from './concentration-break-comp.component';

describe('ConcentrationBreakCompComponent', () => {
  let component: ConcentrationBreakCompComponent;
  let fixture: ComponentFixture<ConcentrationBreakCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcentrationBreakCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentrationBreakCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
