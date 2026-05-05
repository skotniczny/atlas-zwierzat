import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsIndex } from './animals-index';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('AnimalsIndex', () => {
  let component: AnimalsIndex;
  let fixture: ComponentFixture<AnimalsIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsIndex],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalsIndex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
