import { Injectable, signal } from '@angular/core';
import { CvEntry } from '../models/cv-entry.model';

@Injectable({
  providedIn: 'root'
})
export class CvEntryService {
  entries = signal<Array<CvEntry>>([
    {title: 'Contact', body: ''}, 
    {title: 'Work Experience', body: ''}, 
    {title: 'Skills', body: ''}, 
    {title: 'Education', body: ''}, 
    {title: 'Awards', body: ''}, 
    {title: 'Hobbies', body: ''}
  ]);
}
