import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpnamelistComponent } from './empnamelist.component';

describe('EmpnamelistComponent', () => {
  let component: EmpnamelistComponent;
  let fixture: ComponentFixture<EmpnamelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpnamelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpnamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
