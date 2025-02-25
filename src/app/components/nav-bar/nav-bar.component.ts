import { Component, OnInit, signal } from '@angular/core';
import { NavItem } from '../../models/nav-item.model';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  items = signal<Array<NavItem>>([]);

  ngOnInit() {
    this.items.set([
      {title: 'Contact'}, 
      {title: 'Work Experience'}, 
      {title: 'Skills'}, 
      {title: 'Education'}, 
      {title: 'Awards'}, 
      {title: 'Hobbies'}
    ]);
  }
}
