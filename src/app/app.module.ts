import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { SerchUserComponent } from './components/serch-user/serch-user.component';

import {GithubDataService} from "./services/github-data.service";
import { HttpClientModule } from "@angular/common/http";
import { AlertComponent } from './components/alert/alert.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';
import { AboutAppComponent } from './components/about-app/about-app.component';


@NgModule({
  declarations: [
    AppComponent,
    SerchUserComponent,
    AlertComponent,
    InfoComponent,
    HomeComponent,
    AboutAppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [GithubDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
