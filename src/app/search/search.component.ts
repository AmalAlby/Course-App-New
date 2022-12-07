import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  courseTitle=""
  searchdata:any=[]

  constructor(private api:ApiserviceService){}

  read=()=>{

    let data={"courseTitle":this.courseTitle}
    console.log(data)

    this.api.searchCourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Invalid Input")
        }
        else{
          this.searchdata=response
          this.courseTitle=""
        }
      }
    )

  }

}
