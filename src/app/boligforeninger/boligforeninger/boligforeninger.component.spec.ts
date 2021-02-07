import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoligforeningerComponent } from './boligforeninger.component';

describe('BoligforeningerComponent', () => {
  let component: BoligforeningerComponent;
  let fixture: ComponentFixture<BoligforeningerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoligforeningerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoligforeningerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
