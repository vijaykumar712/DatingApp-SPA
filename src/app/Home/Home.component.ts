import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode=false;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  ToggleRegMode()
  {
      this.registerMode=!this.registerMode;
  }


  cancelRegisterMode(regiter : boolean)
  {
     this.registerMode=regiter;
  }
}
