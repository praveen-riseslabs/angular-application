import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutuserService } from 'src/app/services/logoutuser.service';

@Component({
  selector: 'app-logoutuser',
  templateUrl: './logoutuser.component.html',
  styleUrls: ['./logoutuser.component.css']
})
export class LogoutuserComponent implements OnInit {

  constructor(private logoutUserService : LogoutuserService, private router : Router) { }

  ngOnInit() {
  }

  logout() {
    const token = localStorage.getItem('token'); // Retrieve the user's token from local storage
    if (token) {
      this.logoutUserService.logoutUser(token).subscribe(
        (response) => {
          // Handle successful logout
          localStorage.removeItem('token'); // Clear the token from local storage
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

}
