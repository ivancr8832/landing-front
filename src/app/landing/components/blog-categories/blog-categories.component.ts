import { Component, Input } from '@angular/core';
import { Categories } from '../../interfaces';

@Component({
  selector: 'blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css']
})
export class BlogCategoriesComponent {
  @Input() categorie!: Categories;
}
