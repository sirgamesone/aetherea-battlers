import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlerCardComponent } from './battler-card.component';

describe('BattlerCardComponent', () => {
  let component: BattlerCardComponent;
  let fixture: ComponentFixture<BattlerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattlerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
