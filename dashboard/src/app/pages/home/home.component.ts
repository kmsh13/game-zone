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
	count;
	publisher;
	genre;
	year;
    ngOnInit() {
		this.apiservice.showTotalCount().subscribe(data => {
			this.count = data.count;
			this.publisher = data.publisher;
			this.genre = data.genre;
			this.year = data.year;
		}
		);
    }
}