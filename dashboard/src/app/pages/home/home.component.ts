/**
 * Created by andrew.yang on 5/18/2017.
 */
import {OnInit, Component} from "@angular/core";
import { ApiserviceService } from '../../apiservice.service';

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
	
    ngOnInit() {
		this.apiservice.showTotalCount().subscribe(data => {	this.total = data.total[0];
			this.publisher = data.publisher[0];
			this.genre = data.genre[0];
			this.year = data.year[0];
			this.publisherArr = data.publisher;
			this.genreArr = data.genre;
		
		});
    }
}