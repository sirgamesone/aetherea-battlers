import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenseaAssetComponent } from './opensea-asset.component';

describe('OpenseaAssetComponent', () => {
  let component: OpenseaAssetComponent;
  let fixture: ComponentFixture<OpenseaAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenseaAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenseaAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
