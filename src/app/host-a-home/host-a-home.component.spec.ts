import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostAHomeComponent } from './host-a-home.component';

describe('HostAHomeComponent', () => {
  let component: HostAHomeComponent;
  let fixture: ComponentFixture<HostAHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostAHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostAHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
