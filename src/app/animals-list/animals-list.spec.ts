import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsList } from './animals-list';

describe('AnimalsList', () => {
  let component: AnimalsList;
  let fixture: ComponentFixture<AnimalsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsList],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
