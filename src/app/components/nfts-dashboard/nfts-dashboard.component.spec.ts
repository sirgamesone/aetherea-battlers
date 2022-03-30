import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftsDashboardComponent } from './nfts-dashboard.component';

describe('NftsDashboardComponent', () => {
  let component: NftsDashboardComponent;
  let fixture: ComponentFixture<NftsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
