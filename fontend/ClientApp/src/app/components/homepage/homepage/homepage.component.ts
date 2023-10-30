import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { LogoutuserService } from 'src/app/services/logoutuser.service';
import { Router } from '@angular/router';
declare var M: any; 

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit, AfterViewInit {
  @ViewChild('userProfile') userProfile: ElementRef;
  @ViewChild('dropdown1') dropdown1: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef,
    private logoutUserService : LogoutuserService, private router : Router) { }

  ngOnInit() {

  }
  
  logout() {
    debugger
    const token = localStorage.getItem('token'); // Retrieve the user's token from local storage
    if (token) {
      this.logoutUserService.logoutUser(token).subscribe(
        (response) => {
          // Handle successful logout
          localStorage.removeItem('token'); // Clear the token from local storage
          localStorage.removeItem('userid');
          // Perform any other necessary cleanup or navigation
          this.router.navigate(['/login'])
        },
        (error) => {
          console.error('Logout failed:', error);
          // Handle logout failure
        }
      );
    } else {
      console.error('Token not found in local storage');
    }
  }

  ngAfterViewInit() {
    const dropdownTrigger = this.el.nativeElement.querySelector('.dropdown-trigger');
    M.Dropdown.init(dropdownTrigger, {
      constrainWidth: true 
    });
  }

  
  
  
}




