/**
 * Created by Kamesh
 */
import { OnInit, Component } from "@angular/core";
import { ApiserviceService } from '../../apiservice.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(private apiservice: ApiserviceService) { }
  total;
  publisher;
  genre;
  year;
  publisherArr;
  genreArr;
  dataSet = [];
  dataLabel = [];
  chart = []; // This will hold our chart info
  ngOnInit() {
    this.apiservice.showSummery().subscribe(data => {
    this.total = data.total[0];
      this.publisher = data.publisher[0];
      this.genre = data.genre[0];
      this.year = data.year[0];
      this.publisherArr = data.publisher;
      this.genreArr = data.genre;
      data.yearLine.forEach(element => {
       this.dataSet.push(element[0])
       this.dataLabel.push(element[1])
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.dataLabel,
          datasets: [
            {
              data: this.dataSet,
              borderColor:  '#c1e7ff',
              fill:false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
}