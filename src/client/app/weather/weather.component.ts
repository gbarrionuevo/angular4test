import { Component, OnInit} from '@angular/core';
import { WidgetService } from '../shared/widget-service/widget.service';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})

export class WeatherComponent implements OnInit { 
 
  errorMessage: string;
  weather: any = [];
  weatherSelected: any;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {WidgetService} widgetService - The injected NameListService.
   */
  constructor(public widgetService: WidgetService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getWeather();
  }

  updateWeather(weatherSelected:any){
    this.weatherSelected = weatherSelected; 
    console.log(weatherSelected);
  }

  getWeather() {
    this.widgetService.get()
      .subscribe(
        weather =>{
          this.weather = weather;
          this.weatherSelected = weather.list[0];
                },
        error => this.errorMessage = <any>error
      );
  }

}
