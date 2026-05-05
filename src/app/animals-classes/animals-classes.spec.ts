import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsClasses } from './animals-classes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AnimalsClasses', () => {
  let component: AnimalsClasses;
  let fixture: ComponentFixture<AnimalsClasses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsClasses],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalsClasses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
