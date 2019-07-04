import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-doms',
  templateUrl: './doms.component.html',
  styleUrls: ['./doms.component.css']
})
export class DomsComponent implements OnInit {
  @Input() title:any;

  @Input() msg:any;

  @Input() run:any;

  @Input() annimite:any;

  @Output() outer=new EventEmitter<string>();
  public flag:boolean=true;
  public cmsg:string="我是子组件的msg";
  constructor() {

   }
  ngOnInit() {
  
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
     let oBox:any=document.getElementById('box');
    oBox.style.color="red";
    console.log(oBox.innerHTML)
    let oBox1:any=document.getElementById('box1');
    oBox1.style.color="yellow";
    console.log(oBox1.innerHTML)
  }
getmsg(){
  alert(this.msg)
}
getrun(){
this.annimite.run()
alert(this.annimite.msg);
}

runs(){
  alert("我是子组件的方法")
}
sendparent(){
  alert();
  this.outer.emit('我是子组件的数据');
}
}
