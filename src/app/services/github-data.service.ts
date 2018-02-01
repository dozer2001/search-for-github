import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

export interface User{
  login: string,
  avatar_url: string,
  html_url: string,
  created_at: string,
  email: string
}

@Injectable()
export class GithubDataService {
  private _user:User;

  public set user(user:any){
    this._user = user;
  }
  public get user(){
    return this._user;
  }

  constructor(private http: HttpClient) { }
  // searchUser( userName ){
  //   return this.http.get<Observable<User>>(`https://api.github.com/users/${userName}`);
  // }

  searchUser( userName ):Observable<User>{
    return this.http.get(`https://api.github.com/users/${userName}`).map(function(user:any){
      return {
        login: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        created_at: user.created_at,
        email: user.email
      };
    });
  }

}
