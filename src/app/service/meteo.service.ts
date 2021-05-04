import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY } from '../constants/constants';
import { pluck, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class MeteoService {
  meteo: any = [];
  url: string = 'https://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private http: HttpClient) { }

  public getMeteo(city) {
    return this.http.get(this.url + city + '&appid=' + API_KEY).pipe(
      pluck('main'),
      map((res) => {
        console.log(res);
        res
      }),
      pluck('clouds'),
    );
  }
}
