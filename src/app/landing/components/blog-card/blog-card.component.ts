import { Component, Input, inject } from '@angular/core';
import { CardBlog } from '../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() cardInformation!: CardBlog;

  private router = inject(Router);

  public blogSelectedHandler(idBlog: number) {
    this.router.navigateByUrl(`/blog/${idBlog}`);
  }
}
