import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces';
import { menuItems } from '../../constants';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  get menutItems(): MenuItem[] {
    return menuItems;
  }
}
