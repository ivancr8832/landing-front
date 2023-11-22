import { Injectable } from '@angular/core';
import { Countrie } from '../shared/interfaces';
import { countries } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  getCountries(): Countrie[] {
    const countriesDropdown: Countrie[] = countries.map(c => ({
      ...c,
      flagImage: `https://flagcdn.com/w320/${c.code.toLowerCase()}.png`
    })).sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    return countriesDropdown;
  }
}
