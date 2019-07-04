import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
@ViewChild('myBox') myBox:any;

// @ViewChild('header') header:any;

  constructor() { }
  ngOnInit() {

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.myBox)
    this.myBox.nativeElement.style.width='100px';
    this.myBox.nativeElement.style.height='100px';
    this.myBox.nativeElement.style.background='yellow';
   console.log(this.myBox.nativeElement.innerHTML);
  }
  // getchild(){
  //  this.header.run()

  // }
}
