import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentVerifyProcessComponent } from './document-verify-process.component';

describe('DocumentVerifyProcessComponent', () => {
  let component: DocumentVerifyProcessComponent;
  let fixture: ComponentFixture<DocumentVerifyProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentVerifyProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentVerifyProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
