import { Injectable, inject } from '@angular/core';
import { DataService } from './data.service';
import { Observable, map } from 'rxjs';
import { BlogById, BlogsInformation, CardBlog, Categories } from '../landing/interfaces';
import { ResponseService } from './interfaces/http-response.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private dataService = inject(DataService);

  getCategories(): Observable<Categories[]> {
    return this.dataService.get<ResponseService<Categories[]>>('/categories')
      .pipe(
        map(({ data, error }) => {
          if (data) return data!;
          return error;
        })
      );
  }

  getBlogs(year: number, categorieId: number, page: number, limit: number): Observable<BlogsInformation> {
    return this.dataService.get<ResponseService<BlogsInformation>>(`/blog/list/${year}/${categorieId}?page=${page}&limit=${limit}`)
      .pipe(
        map(({ data, error }) => {
          if (data) return data!;
          return error;
        })
      )
  }

  getBlogById(blogId: number):Observable<BlogById> {
    return this.dataService.get<ResponseService<BlogById>>(`/blog/selected/${blogId}`)
      .pipe(
        map(({ data, error }) => {
          if (data) return data!
          return error
        })
      )
  }
}
