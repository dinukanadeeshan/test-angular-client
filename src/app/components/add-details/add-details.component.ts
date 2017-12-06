import {Component, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {RequestOptions} from '@angular/http';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  name: string;
  output: any;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  private extractData(res) {
    const body = res.json();
    return body.data;
  }

  handleSubmit() {
    console.log('submitted');
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    const body = {name: this.name};
    const s = this.http.post('/api/v2/', body, options).toPromise().then(this.extractData).catch(e => console.log(e));
  }

}
