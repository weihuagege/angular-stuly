import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public people:any={
  username:'',
  sex:'1',
  citylist:['北京','上海','深圳','大连'],
  city:'北京',
  hobby:[
    {
    title:'吃饭',
    checked:false
  },
  {
    title:'睡觉',
    checked:false
  },
  {
    title:'敲代码',
    checked:true
  },
  ],
  mark:''
}
  constructor() { }

  ngOnInit() {


  }
  doSubmit(){
  // let usernameDom:any=document.getElementById('username');
  // console.log(usernameDom.value);
  console.log(this.people)
}
}
