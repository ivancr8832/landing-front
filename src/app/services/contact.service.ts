import { Injectable, inject } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { ContactInformation } from '../landing/interfaces';
import { ResponseService } from './interfaces/http-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private dataService = inject(DataService);

  saveContact(data: ContactInformation): Observable<ResponseService<string>> {
    return this.dataService.post<ResponseService<string>>(`/contact`, data);
  }
}
