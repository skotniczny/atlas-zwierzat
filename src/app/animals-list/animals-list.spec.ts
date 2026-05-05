import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsList } from './animals-list';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AnimalsList', () => {
  let component: AnimalsList;
  let fixture: ComponentFixture<AnimalsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsList],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Atlas Zwierząt Polski');
  });
});
