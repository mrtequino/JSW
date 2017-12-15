import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsuarioComponent } from './page-usuario.component';

describe('PageUsuarioComponent', () => {
  let component: PageUsuarioComponent;
  let fixture: ComponentFixture<PageUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
