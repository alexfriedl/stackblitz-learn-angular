import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit, AfterViewInit {

  @ViewChild('nameRef', {static: false}) nameElementRef: ElementRef;

  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
  }

  constructor() { }

  ngOnInit() {
  }

}
