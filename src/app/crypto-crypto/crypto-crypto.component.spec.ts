import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCryptoComponent } from './crypto-crypto.component';

describe('CryptoCryptoComponent', () => {
  let component: CryptoCryptoComponent;
  let fixture: ComponentFixture<CryptoCryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoCryptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
