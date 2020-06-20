import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacamposComponent } from './listacampos.component';

describe('ListacamposComponent', () => {
  let component: ListacamposComponent;
  let fixture: ComponentFixture<ListacamposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacamposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
