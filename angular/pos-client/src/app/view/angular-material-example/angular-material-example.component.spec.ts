import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialExampleComponent } from './angular-material-example.component';

describe('AngularMaterialExampleComponent', () => {
  let component: AngularMaterialExampleComponent;
  let fixture: ComponentFixture<AngularMaterialExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
