import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {
public list:any[]=[];
  constructor(private router:Router) {}
  ngOnInit() {
    for(var i=0;i<10;i++){
      this.list.push('这是第'+i+'条数据');
    }
  }
run(){
  console.log('wdasddaasd')
}
goDetail(){
	({path: 'detail/:id',component: DetailComponent});
    this.router.navigate(['/detail','123']);
}     
}     
