import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  name: string;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  handleSubmit() {
    console.log('submitted');
    const s = this.http.post('/api/v2/', '').subscribe(res => res.text());
    console.log(s);

  }

}
