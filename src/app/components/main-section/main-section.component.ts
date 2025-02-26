import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CvEntryComponent } from '../cv-entry/cv-entry.component';
import { CvEntryService } from '../../services/cv-entry.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-section',
  imports: [CommonModule, CvEntryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  cvEntryService = inject(CvEntryService);
  entries = this.cvEntryService.entries;

}
