import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  fetchCourse=()=>{
    return this.http.get("http://localhost:8080/view")
  }

  addCourse=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/add",datatosend)
  }

  searchCourse=(datasearch:any)=>{
    return this.http.post("http://localhost:8080/search",datasearch)
  }
}
