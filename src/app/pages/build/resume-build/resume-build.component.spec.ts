import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBuildComponent } from './resume-build.component';

describe('ResumeBuildComponent', () => {
  let component: ResumeBuildComponent;
  let fixture: ComponentFixture<ResumeBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeBuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
