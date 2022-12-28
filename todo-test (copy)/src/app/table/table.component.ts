import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { todoInit, TodoService } from '../todo.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(private service: TodoService) { }
  data = this.service.retriveData()
  data1 = this.service.viewDataRetriver()

  viewForm = new FormGroup ({
    title: new FormControl(this.data1[0]?.title),
    startDate: new FormControl(this.data1[0]?.startDate),
    endDate: new FormControl(this.data1[0]?.endDate),
    status: new FormControl(this.data1[0]?.status),
    comments: new FormControl(this.data1[0]?.comments),
  })
  deleter(id: any) {
    console.log("test1", id)
    this.service.deleteData(id)
    console.log("data after retriveal", this.data)
    this.data = this.service.retriveData()
  }

  flag: boolean = false

  updater(id:any){
    this.flag = true
    var vdata = this.data.filter((node)=>id==node.id)
    console.log("vdata",vdata[0])
    console.log("data-->",this.data)
    console.log("data1-->",this.data1)
    this.data1 = this.service.viewDataRetriver()
    this.service.viewData(vdata[0] as todoInit)

  }
  editView(){
    console.log("aaaaaa",this.data1)
    const retrievedData= {...this.viewForm.value,id:this.data1[0].id}
      console.log("retrievedData",retrievedData)

      // this.service.createData(retrievedData as todoInit)
      this.service.editData(retrievedData as todoInit) 
      this.flag = false
      this.data = this.service.retriveData()


  }
}
