import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @ViewChild('userProfile') userProfile: ElementRef;
  @ViewChild('dropdown1') dropdown1: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  
  toggleDropdown() {
    debugger
    const dropdown = this.dropdown1.nativeElement;

    if (dropdown.style.display === 'block') {
      this.renderer.setStyle(dropdown, 'display', 'none');
    } else {
      this.renderer.setStyle(dropdown, 'display', 'block');
    }
  }

}
