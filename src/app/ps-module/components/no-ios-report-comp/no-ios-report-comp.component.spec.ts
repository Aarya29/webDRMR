import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoIosReportCompComponent } from './no-ios-report-comp.component';

describe('NoIosReportCompComponent', () => {
  let component: NoIosReportCompComponent;
  let fixture: ComponentFixture<NoIosReportCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoIosReportCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoIosReportCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
