import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriserComponent } from './enterpriser.component';

describe('EnterpriserComponent', () => {
  let component: EnterpriserComponent;
  let fixture: ComponentFixture<EnterpriserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
