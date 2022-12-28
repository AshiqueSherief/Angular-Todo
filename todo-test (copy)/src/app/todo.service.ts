import { Injectable } from '@angular/core';

export interface todoInit {
  title: string,
  id: any,
  startDate: string,
  endDate: string,
  status: "Yet to Start" | "Ongoing" | "Completed",
  comments: string,

}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }
  private Store: todoInit[] = []
  private viewStore: todoInit[] = []

  
  createData(data:todoInit){
    // let iid = data.endDate | date:HH:mm:ss.SSS
    this.Store.push({...data})
  }
  retriveData(){
    return this.Store;
  }
  deleteData(id:number){
    this.Store = this.Store.filter((node)=>id!=node.id)
    console.log("store after delete is",this.Store) 
  }
  viewData(dataset:todoInit){
    
    this.viewStore.push({...dataset})
    this.viewStore[0]=dataset

    console.log("viewStore-->",this.viewStore)
  }
  viewDataRetriver(){
    return this.viewStore
    console.log("data1-->",this.viewData)

  }
  editData(val :todoInit){
    console.log("val-->",val)
    this.Store = this.Store.filter((node)=>val.id!=node.id)
    console.log("store in editdata-->",this.Store)
    this.Store.push({...val})
  }
}
