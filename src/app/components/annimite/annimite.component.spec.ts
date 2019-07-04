import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnimiteComponent } from './annimite.component';

describe('AnnimiteComponent', () => {
  let component: AnnimiteComponent;
  let fixture: ComponentFixture<AnnimiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnimiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnimiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
