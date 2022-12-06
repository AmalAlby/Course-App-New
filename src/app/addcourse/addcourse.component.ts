import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  courseTitle=""
  courseDesc=""
  venue=""
  duration=""
  date=""

  constructor(private api:ApiserviceService){}

  readvalue=()=>{
    let data:any={"courseTitle":this.courseTitle,"courseDesc":this.courseDesc,"venue":this.venue,"duration":this.duration,"date":this.date}
    console.log(data)


    this.api.addCourse(data).subscribe(

      (response)=>{
        console.log(response)
      }
     
    )


  }

}
