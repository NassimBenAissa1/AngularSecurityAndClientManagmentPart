import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileBadgeComponent } from './client-profile-badge.component';

describe('ClientProfileBadgeComponent', () => {
  let component: ClientProfileBadgeComponent;
  let fixture: ComponentFixture<ClientProfileBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProfileBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
