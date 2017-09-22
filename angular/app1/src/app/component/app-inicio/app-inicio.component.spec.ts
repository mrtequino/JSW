import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInicioComponent } from './app-inicio.component';

describe('AppInicioComponent', () => {
  let component: AppInicioComponent;
  let fixture: ComponentFixture<AppInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
