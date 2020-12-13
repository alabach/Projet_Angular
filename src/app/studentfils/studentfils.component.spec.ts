import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfilsComponent } from './studentfils.component';

describe('StudentfilsComponent', () => {
  let component: StudentfilsComponent;
  let fixture: ComponentFixture<StudentfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentfilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
