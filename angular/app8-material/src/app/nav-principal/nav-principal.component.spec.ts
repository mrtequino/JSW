
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavPrincipalComponent } from './nav-principal.component';

describe('NavPrincipalComponent', () => {
  let component: NavPrincipalComponent;
  let fixture: ComponentFixture<NavPrincipalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
