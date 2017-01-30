import { APIHelperService } from './services/api-helper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'API-helper service';
  private token: string;

  constructor(private apiHelperService: APIHelperService) {}

  ngOnInit() {
    this.apiHelperService.login('joonalas', 'RagnaxJIN7113').subscribe(
      (res) => {
        console.log(res);
        this.token = res.token;
      }
    );
  }

  modUser() {
    this.apiHelperService.modUser('joonuska', null, null, this.token).subscribe(
      (res) => console.log(res)
    );
  }
}
