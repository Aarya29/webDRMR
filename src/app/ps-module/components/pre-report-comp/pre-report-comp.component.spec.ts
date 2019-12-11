import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreReportCompComponent } from './pre-report-comp.component';

describe('PreReportCompComponent', () => {
  let component: PreReportCompComponent;
  let fixture: ComponentFixture<PreReportCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreReportCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreReportCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
