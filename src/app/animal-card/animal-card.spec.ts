import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCard } from './animal-card';
import { provideRouter } from '@angular/router';

describe('AnimalCard', () => {
  let component: AnimalCard;
  let fixture: ComponentFixture<AnimalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalCard],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalCard);
    fixture.componentRef.setInput('animal', { id: 'test', name: 'Test', img: 'test.jpg' });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
