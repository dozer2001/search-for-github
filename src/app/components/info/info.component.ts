import { Component, OnInit } from '@angular/core';
import {GithubDataService, User} from "../../services/github-data.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  user:User;

  constructor(private gitHubServe: GithubDataService) {
  }

  ngOnInit() {
    this.user = this.gitHubServe.user;
  }

}
