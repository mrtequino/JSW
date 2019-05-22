import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeExampleComponent } from './materialize-example.component';

describe('MaterializeExampleComponent', () => {
  let component: MaterializeExampleComponent;
  let fixture: ComponentFixture<MaterializeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterializeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterializeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
