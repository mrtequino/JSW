
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPrincipalComponent } from './dashboard-principal.component';

describe('DashboardPrincipalComponent', () => {
  let component: DashboardPrincipalComponent;
  let fixture: ComponentFixture<DashboardPrincipalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
