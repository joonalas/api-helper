
import { ApiHelperService } from './services/api-helper.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'API-helper service';
  private user: any;
  private token: any;

  constructor(private apiHelperService: ApiHelperService) {}

  ngOnInit() {
    this.apiHelperService.login({
      username: 'joonuska',
      password: 'RagnaxJIN7113'
    }
    ).subscribe(
      resp => {
        const json = resp.json();
        console.log(json.user);
        this.user = json.user;
        this.token = json.token;
      }
    );
  }

  test() {
    console.log('On the test function:');
    this.apiHelperService.getUserMedia(3).subscribe(
      resp => console.log(resp.json())
    );
  }

}
