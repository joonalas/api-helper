
import { ApiHelperService } from './services/api-helper.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'API-helper service';
  private token: string;

  constructor(private apiHelperService: ApiHelperService) {}

  ngOnInit() {
    this.apiHelperService.login('joonuska', 'RagnaxJIN7113').subscribe(
      (resp) => console.log(resp)
    );
  }

  modUser() {
    this.apiHelperService.modUser('joonuska', null, null, this.token).subscribe(
      (resp) => console.log(resp)
    );
  }

}
