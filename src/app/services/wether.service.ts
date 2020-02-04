import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WetherService {

  private proxy:string = 'https://cors-anywhere.herokuapp.com/';
  private forecastUrl: string = "https://api.darksky.net/forecast/";
  private wetherAppKey: string = "204ba8d0e5729fec00ebfe2199f61de2";

  private locationAppKey:string = "mKT5KeykrzYuJRbLMzUhCDudNhB1KYi7";
  private locationAutocompleteUrl: string = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=";
  private locationUrl: string = "http://dataservice.accuweather.com/locations/v1/";

  constructor(private http: HttpClient) { 
  }

    getWether(): Observable<any>{
      let url = this.proxy + this.forecastUrl + this.wetherAppKey + "/-34.603722,-58.381592?exclude=minutely,flags&lang=es&units=auto";
      return this.http.get(url);
    }

    getAutocomplete(text){
      let url = this.locationAutocompleteUrl + this.locationAppKey + "&q=" + text;
      return this.http.get(url);
    }

    getLocation(cityId){
      let url = this.proxy + this.locationUrl + cityId + "?apikey=" + this.locationAppKey;
      return this.http.get(url);
    }
}
