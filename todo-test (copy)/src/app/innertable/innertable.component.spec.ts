import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnertableComponent } from './innertable.component';

describe('InnertableComponent', () => {
  let component: InnertableComponent;
  let fixture: ComponentFixture<InnertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnertableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
