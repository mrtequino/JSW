
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainNavBarComponent } from './main-nav-bar.component';

describe('MainNavBarComponent', () => {
  let component: MainNavBarComponent;
  let fixture: ComponentFixture<MainNavBarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MainNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
