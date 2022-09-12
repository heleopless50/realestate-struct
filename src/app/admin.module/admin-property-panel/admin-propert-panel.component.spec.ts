import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPropertPanelComponent } from './admin-propert-panel.component';

describe('AdminPropertPanelComponent', () => {
  let component: AdminPropertPanelComponent;
  let fixture: ComponentFixture<AdminPropertPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPropertPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPropertPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
