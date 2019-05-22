import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengExampleComponent } from './primeng-example.component';

describe('PrimengExampleComponent', () => {
  let component: PrimengExampleComponent;
  let fixture: ComponentFixture<PrimengExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
