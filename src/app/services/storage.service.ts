import { Injectable } from '@angular/core';
import { join } from 'path';
import { Key } from 'protractor';
import { resolve, reject } from 'q';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
set(key:any,value:any){
localStorage.setItem(key,JSON.stringify(value))
}
  get(key:any){
    return JSON.parse(localStorage.getItem(key));
  }
  remove(key:any){
localStorage.removeItem(key)
  }
  axiosGet(api:any){
    return new Promise((resolve,reject)=>{
axios.get(api).then((res)=>{
  console.log(res);
  resolve(res)
})
    })
  }
}
