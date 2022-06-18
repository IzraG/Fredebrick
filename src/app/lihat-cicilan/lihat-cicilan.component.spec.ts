import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LihatCicilanComponent } from './lihat-cicilan.component';

describe('LihatCicilanComponent', () => {
  let component: LihatCicilanComponent;
  let fixture: ComponentFixture<LihatCicilanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LihatCicilanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LihatCicilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
