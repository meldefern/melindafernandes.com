import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CvEntryComponent } from './components/cv-entry/cv-entry.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, CvEntryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'melindafernandes.com';
}
