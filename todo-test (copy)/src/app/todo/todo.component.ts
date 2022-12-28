import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { todoInit, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  constructor(private service : TodoService){}
  todoForm = new FormGroup ({
    title: new FormControl((''),[Validators.required]),
    startDate: new FormControl((''),[Validators.required]),
    endDate: new FormControl((''),[Validators.required]),
    status: new FormControl((''),[Validators.required]),
    comments: new FormControl(''),
  })
    print(){
      const id :string = new Date().getTime().toString()
      console.log(this.todoForm.value)
      const data = {...this.todoForm.value,id:id}
      console.log("createData",data)
      this.service.createData(data as todoInit)
    }
}

