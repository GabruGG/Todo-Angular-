import { Component } from '@angular/core';
import {Todo} from "../Todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Do-Do-Todos';
  todoArr:Todo[]=[];
  localItem;

  constructor(){
    // setInterval(()=>{
    //     this.title='Title Changed.';
    // },5000);
    this.localItem=localStorage.getItem("todoArr");
    if(this.localItem != null){
      this.todoArr=JSON.parse(this.localItem);
    }


  }
  todoDelete(todo:any) {
    const index=this.todoArr.indexOf(todo);
    this.todoArr.splice(index,1);
    console.log("deleted todo successfully....")
    localStorage.setItem("todoArr",JSON.stringify(this.todoArr));
  }
  addTodo(todo:any){
    console.log(todo);
    this.todoArr.push(todo);
    localStorage.setItem("todoArr",JSON.stringify(this.todoArr));
  }
  todomark(todo:any){
    const index=this.todoArr.indexOf(todo);
    console.log(this.todoArr[index].active);
    this.todoArr[index].active= !this.todoArr[index].active;
    
  }
}
