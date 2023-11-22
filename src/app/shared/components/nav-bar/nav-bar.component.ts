import { Component } from '@angular/core';
import { menuItems } from '../../constants';
import { MenuItem } from '../../interfaces';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  get menutItems(): MenuItem[] {
    return menuItems;
  }
}
