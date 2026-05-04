import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsClasses } from './animals-classes';

describe('AnimalsClasses', () => {
  let component: AnimalsClasses;
  let fixture: ComponentFixture<AnimalsClasses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsClasses],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalsClasses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
