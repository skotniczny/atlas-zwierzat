import { Component, inject, VERSION } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AnimalService } from './services/animal.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  service = inject(AnimalService);
  classEntries = this.service.classEntries;
  version = VERSION.full;
}
