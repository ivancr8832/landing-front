import { Component, inject, OnInit } from '@angular/core';
import { CardBlog, Categories } from '../../interfaces';
import { BlogService } from '../../../services';

@Component({
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})
export class ListBlogsComponent implements OnInit {
  //TODO: BORRAR SOLO PARA PRUEBA
  public blogs: CardBlog [] = [
    {
      day: 20,
      month: 'February',
      altImage: 'goku',
      imageUrl: 'https://elcomercio.pe/resizer/-ff-6d9vg7CILcQh-WvejY7_3lQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg',
      title: 'Card title',
      subtitle: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      day: 20,
      month: 'February',
      altImage: 'goku',
      imageUrl: 'https://elcomercio.pe/resizer/-ff-6d9vg7CILcQh-WvejY7_3lQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg',
      title: 'Card title',
      subtitle: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      day: 20,
      month: 'February',
      altImage: 'goku',
      imageUrl: 'https://elcomercio.pe/resizer/-ff-6d9vg7CILcQh-WvejY7_3lQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg',
      title: 'Card title',
      subtitle: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      day: 20,
      month: 'February',
      altImage: 'goku',
      imageUrl: 'https://elcomercio.pe/resizer/-ff-6d9vg7CILcQh-WvejY7_3lQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg',
      title: 'Card title',
      subtitle: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      day: 20,
      month: 'February',
      altImage: 'goku',
      imageUrl: 'https://elcomercio.pe/resizer/-ff-6d9vg7CILcQh-WvejY7_3lQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg',
      title: 'Card title',
      subtitle: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      day: 20,
      month: 'February',
      altImage: 'goku',
      imageUrl: 'https://elcomercio.pe/resizer/-ff-6d9vg7CILcQh-WvejY7_3lQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg',
      title: 'Card title',
      subtitle: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      day: 20,
      month: 'February',
      altImage: 'goku',
      imageUrl: 'https://elcomercio.pe/resizer/-ff-6d9vg7CILcQh-WvejY7_3lQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg',
      title: 'Card title',
      subtitle: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      day: 20,
      month: 'February',
      altImage: 'goku',
      imageUrl: 'https://elcomercio.pe/resizer/-ff-6d9vg7CILcQh-WvejY7_3lQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg',
      title: 'Card title',
      subtitle: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
  ]

  private blogServices = inject( BlogService );
  public categories: Categories[] = [];

  ngOnInit(): void {
    this.blogServices.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }
}
