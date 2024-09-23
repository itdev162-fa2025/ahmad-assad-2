import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  weatherForecasts: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWeatherForecasts();
}

getWeatherForecasts() {
  this.http.get('https://localhost:4200/WeatherForecast')
    .subscribe((data) => {
      this.weatherForecasts = data;
      console.log(this.weatherForecasts);
    });
}
}