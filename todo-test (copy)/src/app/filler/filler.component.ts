import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { todoInit, TodoService } from '../todo.service';

@Component({
  selector: 'app-filler',
  templateUrl: './filler.component.html',
  styleUrls: ['./filler.component.scss']
})
export class FillerComponent {
  constructor(private service : TodoService){}

  data1 = this.service.viewDataRetriver()

  viewForm = new FormGroup ({
    title: new FormControl(this.data1[0]?.title),
    startDate: new FormControl(this.data1[0]?.startDate),
    endDate: new FormControl(this.data1[0]?.endDate),
    status: new FormControl(this.data1[0]?.status),
    comments: new FormControl(this.data1[0]?.comments),
  })
  editView(){
    console.log("aaaaaa",this.data1)
    const retrievedData= {...this.viewForm.value,id:this.data1[0].id}
      console.log("retrievedData",retrievedData)
      // this.service.createData(retrievedData as todoInit)
      this.service.editData(retrievedData as todoInit) 
  }
}
