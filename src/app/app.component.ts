import { Component, VERSION,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient){}
  ngOnInit(){
    this.http.get("https://api.unsplash.com/photos/?client_id=dKbnVXiLJZ0vS0SvhEyckbMCPW3Ce-1qOGmwYOIRLLQ").subscribe(
      res => {
        console.log(res);
      });
  }
}
