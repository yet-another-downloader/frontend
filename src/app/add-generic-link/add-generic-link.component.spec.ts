import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenericLinkComponent } from './add-generic-link.component';

describe('AddGenericLinkComponent', () => {
  let component: AddGenericLinkComponent;
  let fixture: ComponentFixture<AddGenericLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGenericLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGenericLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
