import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';//引入接受
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(public route:ActivatedRoute) { }//声明
  ngOnInit() {
console.log(this.route);
// this.route.queryParams.subscribe((res:any)=>{
//   console.log(res);
// })//get获取
this.route.params.subscribe((res:any)=>{
    console.log(res);
  })//动态获取
  }

}
