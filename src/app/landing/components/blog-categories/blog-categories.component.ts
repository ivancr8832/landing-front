import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categories } from '../../interfaces';

@Component({
  selector: 'blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css']
})
export class BlogCategoriesComponent {
  @Input() categorie!: Categories;
  @Output() categorieSelected: EventEmitter<{ year: number, categorieId: number }> = new EventEmitter();

  public selectedCategorie(categorieId: number, year: number) {
    this.categorieSelected.emit({ categorieId, year });
  }
}
