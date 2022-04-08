import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlersListComponent } from './battlers-list.component';

describe('BattlersListComponent', () => {
  let component: BattlersListComponent;
  let fixture: ComponentFixture<BattlersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattlersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
