import { Injectable, inject } from '@angular/core';
import { DataService } from './data.service';
import { Observable, map } from 'rxjs';
import { Categories } from '../landing/interfaces';
import { ResponseService } from './interfaces/http-response.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private dataService = inject(DataService);

  getCategories(): Observable<Categories[]> {
    return this.dataService.get<ResponseService<Categories[]>>('/blog/categories')
      .pipe(
        map(resp => resp.data.map(({ id, name, years }, idx) => ({ id, name, ariaExpanded: idx === 0, years })))
      );
  }
}
