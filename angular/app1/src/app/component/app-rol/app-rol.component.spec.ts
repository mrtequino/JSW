import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRolComponent } from './app-rol.component';

describe('AppRolComponent', () => {
  let component: AppRolComponent;
  let fixture: ComponentFixture<AppRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
