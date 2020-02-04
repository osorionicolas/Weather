import { Component } from '@angular/core';
import { WetherService } from '../services/wether.service';
import { Wether } from '../classes/wether';
import { Location } from '../classes/location';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private currently: Wether;
  private cities: Array<Location>;
  constructor(private wetherService: WetherService) {
    this.cities = new Array<Location>();
    this.wetherService.getWether().subscribe((element:any) => {
      this.currently = element.currently;
    });
  }

  autocomplete(value:string){
    if(value.length >= 3){
      this.wetherService.getAutocomplete(value).subscribe((element:any) => {
        element.forEach(element => {
          let location:Location = new Location();
          location.id = element.Key;
          location.country = element.Country.LocalizedName;
          location.city = element.LocalizedName;
          this.wetherService.getLocation(element.Key).toPromise().then((element:any) => {
            location.longitude = element.GeoPosition.Longitude;
            location.latitude = element.GeoPosition.Latitude;
            this.cities.push(location);
          });
        })
      });
    }
    else{
      this.cities = [];
    }
  }
}