import { Component, Input } from '@angular/core';
import { CardBlog } from '../../interfaces';

@Component({
  selector: 'blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() cardInformation!: CardBlog;
}
