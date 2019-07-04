import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service'
// var storage =new StorageService;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public keyword:string='';
public todolist:any[]=[];

  constructor(public storage:StorageService) { 
    // console.log(storage.get)
  // let s =  this.storage.get();
  // console.log(s)
  }

  ngOnInit() {

    var todolists:any=this.storage.get('todolist');
    if(todolists){
      this.todolist=todolists;
    }
  }
add(e:any){
if(e.keyCode==13){
  if(!this.todolisthaskeyword(this.todolist,this.keyword)){
  this.todolist.push({
    title:this.keyword,
    status:false
  })
this.keyword=''
this.storage.set('todolist',this.todolist);
}else{
  alert("数据已经存在");
  this.keyword='';
}
}
}
delete(k:any){
this.todolist.splice(k,1);
this.storage.set('todolist',this.todolist);

}
todolisthaskeyword(todolist:any,keyword:any){
  if(!keyword) return false;
  for(var i=0;i<todolist.length;i++){
    if(todolist[i].title==keyword){
      return true;
    }
  }
return false;
}
boxchange(){
this.storage.set('todolist',this.todolist);
 
}
}
