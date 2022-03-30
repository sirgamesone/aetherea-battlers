import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensDashboardComponent } from './tokens-dashboard.component';

describe('TokensDashboardComponent', () => {
  let component: TokensDashboardComponent;
  let fixture: ComponentFixture<TokensDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokensDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokensDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
