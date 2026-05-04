import { TestBed } from '@angular/core/testing';

import { AnimalService } from './animal.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('Animal', () => {
  let service: AnimalService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(AnimalService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAnimals()', () => {
    const mockData = [
      { "id": "wilk-szary", "name": "Wilk szary", "img": "wilk_szary.jpg" },
      { "id": "lis-pospolity", "name": "Lis pospolity, lis rudy", "img": "lis_pospolity.jpg" }
    ];
    service.getAnimals().subscribe((result) => {
      expect(result[0].name).toBe('Wilk szary');
    });

    const req = controller.expectOne('/animals/animals.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('getAnimal()', () => {
    const mockData = { 
      "id": "wilk-szary",
      "name": "Wilk szary",
      "latinName": "Conis lupus",
      "habitat": "kompleksy leśne",
      "food": "wszystkożerne: żywią się ssakami",
      "chronotype": "latem są aktywne głównie w nocy cały dzień.",
      "activity": "aktywne cały rok.",
      "conservation": "gatunek objęty ochroną.",
      "development": "<p>Stado wilków to wataha, składa się przeważnie z kilku</p>",
      "img": "wilk_szary.jpg"
    };
    service.getAnimal("wilk-szary").subscribe((result) => {
      expect(result.name).toBe('Wilk szary');
    })

    const req = controller.expectOne('/animals/wilk-szary.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockData)
  });

  it('getClasses()', () => {
    const mockData = {
      "ssaki": [
        {"id":"wilk-szary","name":"Wilk szary","img":"img/animals/wilk_szary.jpg"},
        {"id":"lis-pospolity","name":"Lis pospolity","img":"img/animals/lis_pospolity.jpg"}
      ]
    };

    service.getClasses().subscribe((result) => {
      expect(result["ssaki"][0].id).toBe("wilk-szary");
      expect(result["ssaki"][1].id).toBe("lis-pospolity");
    });

    const req = controller.expectOne('/animals/classes.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  afterEach(() => {
    controller.verify()
  });
});
