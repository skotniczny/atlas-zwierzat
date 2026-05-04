import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsIndex } from './animals-index';

describe('AnimalsIndex', () => {
  let component: AnimalsIndex;
  let fixture: ComponentFixture<AnimalsIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsIndex],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalsIndex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
