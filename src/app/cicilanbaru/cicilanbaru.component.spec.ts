import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicilanbaruComponent } from './cicilanbaru.component';

describe('CicilanbaruComponent', () => {
  let component: CicilanbaruComponent;
  let fixture: ComponentFixture<CicilanbaruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicilanbaruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicilanbaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
