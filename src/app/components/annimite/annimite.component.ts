import { Component, OnInit,ViewChild } from '@angular/core';
import { DomsComponent } from '../../components/doms/doms.component';

import { from } from 'rxjs';
@Component({
  selector: 'app-annimite',
  templateUrl: './annimite.component.html',
  styleUrls: ['./annimite.component.css']
})
export class AnnimiteComponent implements OnInit {
  @ViewChild('doms') doms:any
  public title:string="首页的标题"
public msg:string="我是一个父亲的msg";
  constructor() { }
  ngOnInit() {

  }
show(){
  var aside:any=document.getElementById('aside');
  aside.style.transform="translate(0,0)"
}
hide(){
  var aside:any=document.getElementById('aside');
  aside.style.transform="translate(100%,0)"
}
run(){
  alert("我是父亲的方法");
}
getchild(){
alert(this.doms.msg);
}
getchildrun(){
  this.doms.run();
}
play(e){
  alert("我是父亲的方法");
console.log(e);
}
}
