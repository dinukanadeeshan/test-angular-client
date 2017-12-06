import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text;

  constructor(private  http: Http) {
  }


  fetchDataFromServer() {
    this.text = this.http.get('/api/v1/').map(res => res.text());
  }
}
