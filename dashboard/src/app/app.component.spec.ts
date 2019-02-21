import { TestBed, async } from '@angular/core/testing';
import {Navigation} from "./components/navigation/navigation.component";
import {Topnavbar} from "./components/topnavbar/topnavbar.component";
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
		imports: [
          RouterTestingModule
              
],
      declarations: [
        AppComponent,
		Navigation,
		Topnavbar
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have title element as GameZone'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('GameZone');
  }));
  
  
});
