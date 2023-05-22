import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RproyectoComponent } from './rproyecto.component';

describe('RproyectoComponent', () => {
  let component: RproyectoComponent;
  let fixture: ComponentFixture<RproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
