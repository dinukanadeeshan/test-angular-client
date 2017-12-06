import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Output {
  data: string;
}

@Component({
  selector: 'app-newhttpclient',
  templateUrl: './newhttpclient.component.html',
  styleUrls: ['./newhttpclient.component.css']
})
export class NewhttpclientComponent implements OnInit {

  output: Output;

  constructor(private  http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Output>('/api/v1').subscribe(
      (data) => {
        console.log(data.data);

      }
    );
  }

}
