import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GithubDataService, User} from "../../services/github-data.service";


@Component({
  selector: 'app-serch-user',
  templateUrl: './serch-user.component.html',
  styleUrls: ['./serch-user.component.css']
})
export class SerchUserComponent implements OnInit {

  user: User;
  nickname: string;
  searchingUser: boolean;
  showContinueBtn: boolean = false;

  @Output() newAppMessage: EventEmitter<any> = new EventEmitter();

  constructor(private gitHubService: GithubDataService) {
  }

  ngOnInit() {
  }

  onSearch(form) {
    this.searchingUser = true;
    this.gitHubService.searchUser(this.nickname).subscribe(user => {
      this.user = user;
      this.gitHubService.user = user;

      this.searchingUser = false;
      this.showContinueBtn = true;

      this.newAppMessage.emit({
        message: `We found user: ${this.user.login}`,
        error: false
      });
    }, error2 => {
      this.searchingUser = false;
      this.newAppMessage.emit({
        message: `User not found`,
        error: true
      });
    })
  }
}
