import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProReportCompComponent } from './pro-report-comp.component';

describe('ProReportCompComponent', () => {
  let component: ProReportCompComponent;
  let fixture: ComponentFixture<ProReportCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProReportCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProReportCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
