import { Component } from '@angular/core';
import { Wether } from '../classes/wether';
import { WetherService } from '../services/wether.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  private daily: Array<Wether> = new Array<Wether>();
  constructor(private wetherService: WetherService) {
    wetherService.getWether().subscribe((element:any) => {
      element.daily.data.forEach(element => {
        let wether:Wether = element;
        wether.dayOfTheWeek = this.days[new Date(element.time * 1000).getDay()];
        this.daily.push(wether);
      });
    });
  }

}
