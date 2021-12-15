import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRetrieveButtonsComponent } from './client-retrieve-buttons.component';

describe('ClientRetrieveButtonsComponent', () => {
  let component: ClientRetrieveButtonsComponent;
  let fixture: ComponentFixture<ClientRetrieveButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRetrieveButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRetrieveButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
