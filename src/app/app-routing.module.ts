import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { InfoComponent } from "./components/info/info.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutAppComponent } from "./components/about-app/about-app.component";

const ROUTES: Routes = [
  { path: 'info', component: InfoComponent},
  { path: 'about-app', component: AboutAppComponent},
  { path: '', component:HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
