import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public seriesData: any[] = [];
  public from: Date = new Date('2009/02/05');
  public to: Date = new Date('2011/10/07');

  constructor(private service: DataService) {
    this.service.get().then((data) => {
      this.seriesData = data;
    });
  }
}
