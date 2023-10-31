import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { LogoutuserService } from 'src/app/services/logoutuser.service';
import { Router } from '@angular/router';
import { Userdata } from 'src/app/models/Userdata';
import { UserdataserviceService } from 'src/app/services/registeruser/userdataservice.service';
import { ResetpasswordComponent } from '../../resetpassword/resetpassword/resetpassword.component';
declare var M: any; 

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit, AfterViewInit {
  @ViewChild('userProfile') userProfile: ElementRef;
  @ViewChild('dropdown1') dropdown1: ElementRef;
  @ViewChild(ResetpasswordComponent) resetPasswordComponent!: ResetpasswordComponent;

  userdata:Userdata = new Userdata();
  userlist:Userdata[] = [];
  UserId : number;
  Usertoken : string;
  
  constructor(private renderer: Renderer2, private el: ElementRef,
    private logoutUserService : LogoutuserService, private router : Router, private userdataservice : UserdataserviceService) { }

  ngOnInit() {
    const currentUserId = localStorage.getItem('userid');
    if (!currentUserId) {
      alert('User not found in localStorage');
      return;
    }
    this.UserId = Number(currentUserId);
    this.userdataservice.getUserData('http://127.0.0.1:5000/getuser').subscribe((response) => {
      this.userlist = response;
      this.userdata = this.userlist.find(a => a.UserID === this.UserId);
      
    });
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
          M.toast({html: 'Logout successfully', classes: 'rounded'});
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

  // resetPassword(){
  //   debugger
  //   this.resetPasswordComponent.updatePassword()
  // }
  
  
  
}




