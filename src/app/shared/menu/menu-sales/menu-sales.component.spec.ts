import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSalesComponent } from './menu-sales.component';

describe('MenuSalesComponent', () => {
  let component: MenuSalesComponent;
  let fixture: ComponentFixture<MenuSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
