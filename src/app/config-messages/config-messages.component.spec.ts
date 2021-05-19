import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMessagesComponent } from './config-messages.component';

describe('ConfigMessagesComponent', () => {
  let component: ConfigMessagesComponent;
  let fixture: ComponentFixture<ConfigMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
