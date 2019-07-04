import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
public keyword:string='';
public historylist:any[]=[];
  constructor(public storage:StorageService) {
    // let s =this.storage.get()
    // console.log(s)
   }
  ngOnInit() {
    var searchlist:any=this.storage.get('serchlist');
    if(searchlist){
      this.historylist=searchlist;
    }
  }
doserch(){
  if(this.historylist.indexOf(this.keyword)==-1){
    this.historylist.push(this.keyword);
    this.storage.set('serchlist',this.historylist)
  }
  this.keyword=''
}
delete(k:any){
  this.historylist.splice(k,1)
  this.storage.set('serchlist',this.historylist)
}
}
