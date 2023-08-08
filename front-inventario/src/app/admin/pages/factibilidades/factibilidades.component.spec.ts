import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactibilidadesComponent } from './factibilidades.component';

describe('FactibilidadesComponent', () => {
  let component: FactibilidadesComponent;
  let fixture: ComponentFixture<FactibilidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactibilidadesComponent]
    });
    fixture = TestBed.createComponent(FactibilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
