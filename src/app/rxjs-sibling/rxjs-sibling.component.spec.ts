import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSiblingComponent } from './rxjs-sibling.component';

describe('RxjsSiblingComponent', () => {
  let component: RxjsSiblingComponent;
  let fixture: ComponentFixture<RxjsSiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
