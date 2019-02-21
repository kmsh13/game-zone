import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportComponent } from './report.component';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../apiservice.service';
import { HttpModule } from '@angular/http';
describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;
  let h1:        HTMLElement;
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
  it('should display original title - Reports', () => {
	  h1 = fixture.nativeElement.querySelector('h1');
      expect(h1.textContent).toContain("Reports");
});
});
