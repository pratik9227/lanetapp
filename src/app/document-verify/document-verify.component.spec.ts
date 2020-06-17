import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentVerifyComponent } from './document-verify.component';

describe('DocumentVerifyComponent', () => {
  let component: DocumentVerifyComponent;
  let fixture: ComponentFixture<DocumentVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
