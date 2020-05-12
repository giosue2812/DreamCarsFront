import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupeUserComponent } from './add-groupe-user.component';

describe('AddGroupeUserComponent', () => {
  let component: AddGroupeUserComponent;
  let fixture: ComponentFixture<AddGroupeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGroupeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
