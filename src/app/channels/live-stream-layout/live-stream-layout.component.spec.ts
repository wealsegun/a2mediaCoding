import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStreamLayoutComponent } from './live-stream-layout.component';

describe('LiveStreamLayoutComponent', () => {
  let component: LiveStreamLayoutComponent;
  let fixture: ComponentFixture<LiveStreamLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveStreamLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveStreamLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).be;
  // });
});
