import { Component, Input } from '@angular/core';
import { CvEntry } from '../../models/cv-entry.model';

@Component({
  selector: 'app-cv-entry',
  imports: [],
  templateUrl: './cv-entry.component.html',
  styleUrl: './cv-entry.component.scss'
})
export class CvEntryComponent {
  @Input() entry!: CvEntry;
}
