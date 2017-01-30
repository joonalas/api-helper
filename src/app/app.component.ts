import { APIHelperService } from './services/api-helper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'API-helper service';

  constructor(private apiHelperService: APIHelperService) {}

  ngOnInit() {
    this.apiHelperService.login('joonalas', 'RagnaxJIN7113').subscribe(
      (res) => console.log(res)
    );
  }
}
