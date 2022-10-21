import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/').subscribe((res) => {
      console.log(res);
    });

    const guess = { guess: 14 };

    this.http.post('http://localhost:3000/', guess).subscribe((res) => {
      console.log(res);
    });
  }
}
