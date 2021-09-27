import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnzipFilesComponent } from './unzip-files.component';

describe('UnzipFilesComponent', () => {
  let component: UnzipFilesComponent;
  let fixture: ComponentFixture<UnzipFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnzipFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnzipFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
