import { Component, inject } from '@angular/core';
import { CvEntryService } from '../../services/cv-entry.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  cvEntryService = inject(CvEntryService);
  items = this.cvEntryService.entries; //todo: replace with computed titles.
}
