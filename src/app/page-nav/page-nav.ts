import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page-nav.html',
  styleUrl: './page-nav.css',
})
export class PageNav {}
