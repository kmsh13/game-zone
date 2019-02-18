/**
 * Created by andrew.yang on 5/18/2017.
 */
import {OnInit, Component} from "@angular/core";
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
	 chart = []; // This will hold our chart info

    ngOnInit() {
		this.apiservice.showTotalCount().subscribe(data => {	this.total = data.total[0];
			this.publisher = data.publisher[0];
			this.genre = data.genre[0];
			this.year = data.year[0];
			this.publisherArr = data.publisher;
			this.genreArr = data.genre;
		
		
		this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: ["jan","feb","march","april","may"],
            datasets: [
              { 
                data: [10,3,5,6,8],
                
              },
              { 
                data: [2,3,4,6,7,8],
                
              },
			   { 
                data: [3,5,9,0,3,4],
                
              },

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