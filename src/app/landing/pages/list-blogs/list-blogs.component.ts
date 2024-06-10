import { Component, inject, OnInit } from '@angular/core';
import { CardBlog, Categories } from '../../interfaces';
import { BlogService } from '../../../services';

@Component({
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})
export class ListBlogsComponent implements OnInit {
  private blogServices = inject( BlogService );

  public page: number = 1;
  public pageSize: number = 8;
  public totalRecords: number = 0;
  public totalPage!: number;

  public blogs: CardBlog [] = [];
  public categories: Categories[] = [];
  public categorieIdSelected!: number;
  public yearSelected!: number;

  ngOnInit(): void {
    this.blogServices.getCategories().subscribe(categories => {
      this.categories = categories;
      const { years, id } = categories[0];

      this.categorieIdSelected = id;
      this.yearSelected = years[0];
      this.getBlogs();
    });
  }

  public obtainNewBlogs({categorieId, year}: { year: number, categorieId: number }) {
    this.blogs = [];
    this.page = 1;
    this.categorieIdSelected = categorieId;
    this.yearSelected = year;
    this.getBlogs();
  }

  public handlePageChange(event: any) {
    this.page = event;
    this.getBlogs()
  }

  private getBlogs() {
    this.blogServices.getBlogs(this.yearSelected, this.categorieIdSelected, this.page, this.pageSize)
      .subscribe(({ page, totalRecords, blogs, totalPage }) => {
        this.totalRecords = totalRecords;
        this.page = page;
        this.totalPage = totalPage;
        this.blogs = blogs;
    });
  }
}
