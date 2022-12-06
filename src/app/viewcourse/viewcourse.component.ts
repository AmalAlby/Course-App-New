import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent {

  data:any=[]

  constructor(private api:ApiserviceService){

    

    api.fetchCourse().subscribe(

      (response)=>{
        this.data=response;
      }

    )

  }

}
