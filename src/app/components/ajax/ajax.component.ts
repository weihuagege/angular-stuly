import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { from } from 'rxjs';
import axios from 'axios'
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  public list:any[]=[];


  constructor(public http:HttpClient,public httpserve:StorageService) { }

  ngOnInit() {
  }
getdata(){
  let api="http://a.itying.com/api/productlist";
this.http.get(api).subscribe((res:any)=>{
console.log(res);
this.list=res.result;
})
}
postdata(){
const httpoptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
let api:any ="http://127.0.0.1:3000/dologin";//假的接口，不存在实例而已
this.http.post(api,{"username":"zs",'age':20},httpoptions).subscribe((res)=>{
  console.log(res)
})
}
jsondata(){
let api:any ="http://a.itying.com/api/productlist";
  this.http.jsonp(api,'callback').subscribe((res)=>{
console.log(res);
  })
}
axiosdata(){
let api:any ="http://a.itying.com/api/productlist";

  // axios.get(api).then((res)=>{
  //   console.log(res);
  // }).catch((error)=>{
  //   console.log(error);
  // })
 return this.httpserve.axiosGet(api)
}
}
