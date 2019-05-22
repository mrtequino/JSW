import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W3cssExampleComponent } from './w3css-example.component';

describe('W3cssExampleComponent', () => {
  let component: W3cssExampleComponent;
  let fixture: ComponentFixture<W3cssExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W3cssExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W3cssExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
