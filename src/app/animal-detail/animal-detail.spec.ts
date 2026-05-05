import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetail } from './animal-detail';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AnimalDetail', () => {
  let component: AnimalDetail;
  let fixture: ComponentFixture<AnimalDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalDetail],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalDetail);
    fixture.componentRef.setInput('animalId', 'wilk-szary');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
