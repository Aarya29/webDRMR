import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWrapperCompComponent } from './filter-wrapper-comp.component';

describe('FilterWrapperCompComponent', () => {
  let component: FilterWrapperCompComponent;
  let fixture: ComponentFixture<FilterWrapperCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterWrapperCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterWrapperCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
