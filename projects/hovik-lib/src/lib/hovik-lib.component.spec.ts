import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HovikLibComponent } from './hovik-lib.component';

describe('HovikLibComponent', () => {
  let component: HovikLibComponent;
  let fixture: ComponentFixture<HovikLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HovikLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HovikLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
