import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercolumComponent } from './usercolum.component';

describe('UsercolumComponent', () => {
  let component: UsercolumComponent;
  let fixture: ComponentFixture<UsercolumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercolumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercolumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
