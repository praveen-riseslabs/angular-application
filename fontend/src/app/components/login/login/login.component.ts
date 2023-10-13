import { Component, OnInit } from '@angular/core';
import { Userdata } from 'src/app/models/Userdata';
import { LoginService } from 'src/app/services/loginuser/login.service';
import { UserdataserviceService } from 'src/app/services/registeruser/userdataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdata: Userdata =  new Userdata();
  userlist :Userdata[] = [];
  message: string="login sucessfull"
  constructor(private userdataservice : UserdataserviceService, private loginservice : LoginService ) { }

  ngOnInit() {
    this.userdataservice.getUserData('http://127.0.0.1:5000/getuser').subscribe((response) => {
      this.userlist = response;
      const localdata = localStorage.getItem('registerUsers');
      if(localdata!= null)
      {
        this.userlist =JSON.parse(localdata)
      }
  })
  }

  // loginUser(){
  //   const isUserExist = this.userlist.find(user =>user.Email ===  this.userdata.Email && user.Password == this.userdata.Password );
  // if(isUserExist != undefined)

  // {
  //   alert("logged in successfully")
  // }
  // else{
  //   alert("wrong  credentials")
  // }
  // }

  login() {
    debugger
    this.loginservice.login(this.userdata.Email, this.userdata.Password).subscribe(
      (response: any) => {
        
        this.message = response.message;
        alert(this.message)
        
        // Handle successful login, e.g., navigate to another page or set a user session.
      },
      (error) => {
        this.message = 'Invalid credentials'; // Handle login failure
      }
    );
  }
}
