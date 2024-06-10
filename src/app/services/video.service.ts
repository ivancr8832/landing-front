import { Injectable, inject } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Video } from '../landing/interfaces';
import { ResponseService } from './interfaces/http-response.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private dataService = inject(DataService);

  getVideoRandom(): Observable<ResponseService<Video>>{
    return this.dataService.get<ResponseService<Video>>('/videos');
  }
}
