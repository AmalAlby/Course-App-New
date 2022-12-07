import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

const myroute:Routes=[
  {
    path:"",
    component:AddcourseComponent
  },
  {
    path:"view",
    component:ViewcourseComponent
  },
  {
    path:"search",
    component:SearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    ViewcourseComponent,
    NavbarComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
