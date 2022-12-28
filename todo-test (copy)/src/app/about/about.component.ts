import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { todoInit, TodoService } from '../todo.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private service : TodoService){}
  
  data = this.service.viewDataRetriver()
  viewForm = new FormGroup ({
    title: new FormControl(this.data[0]?.title),
    startDate: new FormControl(this.data[0]?.startDate),
    endDate: new FormControl(this.data[0]?.endDate),
    status: new FormControl(this.data[0]?.status),
    comments: new FormControl(this.data[0]?.comments),
  })
  editView(){
    console.log("aaaaaa",this.data)
    const retrievedData= {...this.viewForm.value,id:this.data[0].id}
      console.log("retrievedData",retrievedData)
      // this.service.createData(retrievedData as todoInit)
      this.service.editData(retrievedData as todoInit) 
  }
}
