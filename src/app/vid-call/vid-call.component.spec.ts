import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidCallComponent } from './vid-call.component';

describe('VidCallComponent', () => {
  let component: VidCallComponent;
  let fixture: ComponentFixture<VidCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
