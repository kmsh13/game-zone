import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportComponent } from './report.component';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../apiservice.service';
import { HttpModule } from '@angular/http';
describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
		imports: [
    FormsModule,
	HttpModule
	],
      declarations: [ReportComponent],
	   providers: [ApiserviceService]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
