import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlerDetailComponent } from './battler-detail.component';

describe('BattlerDetailComponent', () => {
  let component: BattlerDetailComponent;
  let fixture: ComponentFixture<BattlerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattlerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
