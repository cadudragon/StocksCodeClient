import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  baseUrl = environment.baseUrl;
  companies: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getCompanies();
  }

  registerToggle() {
    this.registerMode = true;
  }

  getCompanies() {
    this.http.get(`${this.baseUrl}company/GetAll`).subscribe(response => {
      this.companies = response;
    }, error => {
      console.log(error);
    });
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
