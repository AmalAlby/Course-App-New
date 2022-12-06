import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';


const myroute:Routes=[
  {
    path:"add",
    component:AddcourseComponent
  },
  {
    path:"view",
    component:ViewcourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    ViewcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
