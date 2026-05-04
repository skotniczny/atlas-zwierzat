import { Component, computed } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AnimalService } from './services/animal.service';
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AnimalClasses } from './models/animal';
import { VERSION } from '@angular/core';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  service = inject(AnimalService);
  classes = toSignal(this.service.getClasses(), { initialValue: {} as AnimalClasses });
  classEntries = computed(() => Object.entries(this.classes()).map(([name, animals]) => ({ name, animals })));
  version = VERSION.full;
}
