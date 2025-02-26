import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, MainSectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'melindafernandes.com';
}
