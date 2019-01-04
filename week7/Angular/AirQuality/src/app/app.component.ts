import { Component, OnInit } from '@angular/core';
import { AirQualityService } from './services/air-quality.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'AirQuality';
  countries = [];
  locations=[];
  country_name: string;
  public country_data=true;
  public location_data:boolean;
  constructor(private airQualityService: AirQualityService) {
  }
  ngOnInit() {
    this.airQualityService.getCountries().subscribe((res) => {
      this.countries = res['results'];
    },
      (error) => console.log(error));
  }
  searchCountry(country: string) {
    this.country_data=false;
    this.location_data=true;
    console.log(country);
    this.country_name = country;
    this.airQualityService.fetchcountrydata('https://api.openaq.org/v1/latest?country='+this.country_name).subscribe((res: any) => {
      this.locations=res.results;
    });
  }
}




