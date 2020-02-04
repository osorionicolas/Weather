import { Component } from '@angular/core';
import { WetherService } from '../services/wether.service';
import { Wether } from '../classes/wether';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private hourly: Array<Wether> = new Array<Wether>();
  constructor(private wetherService: WetherService) {
    wetherService.getWether().subscribe((element:any) => {
      element.hourly.data.forEach(element => {
        let now:number = +(new Date().getTime() / 1000).toFixed(0);
        if(element.time > now && element.time < now + 43200){
          this.hourly.push(element);
        }
      });
    });
  }

}
