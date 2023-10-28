import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var M: any; // Declare Materialize as any

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit, AfterViewInit {
  @ViewChild('userProfile') userProfile: ElementRef;
  @ViewChild('dropdown1') dropdown1: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {

  }
  
 
  ngAfterViewInit() {
    const dropdownTrigger = this.el.nativeElement.querySelector('.dropdown-trigger');
    M.Dropdown.init(dropdownTrigger, {
      constrainWidth: false 
    });
  }

  
  
  
}




