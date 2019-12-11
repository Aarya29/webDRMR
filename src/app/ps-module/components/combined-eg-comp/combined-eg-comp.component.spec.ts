import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedEgCompComponent } from './combined-eg-comp.component';

describe('CombinedEgCompComponent', () => {
  let component: CombinedEgCompComponent;
  let fixture: ComponentFixture<CombinedEgCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinedEgCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedEgCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
