import { Injectable, signal } from '@angular/core';
import { CvEntry } from '../models/cv-entry.model';

@Injectable({
  providedIn: 'root'
})
export class CvEntryService {
  entries = signal<Array<CvEntry>>([
    {id: 'entry-0', title: 'Contact', body: ''}, 
    {id: 'entry-1', title: 'Work Experience', body: ''}, 
    {id: 'entry-2', title: 'Skills', body: ''}, 
    {id: 'entry-3', title: 'Education', body: ''}, 
    {id: 'entry-4', title: 'Awards', body: ''}, 
  ]);
}
