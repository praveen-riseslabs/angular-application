import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userdata } from 'src/app/models/Userdata';
import { LoginService } from 'src/app/services/loginuser/login.service';
import { UserdataserviceService } from 'src/app/services/registeruser/userdataservice.service';
declare var M : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdata: Userdata =  new Userdata();
  userlist :Userdata[] = [];
  message : string = "Login Succesfully"
  duration :number = 3000;
  constructor(private userdataservice : UserdataserviceService, private loginservice : LoginService,
              private router : Router) { }

  ngOnInit() {
    this.userdataservice.getUserData('http://127.0.0.1:5000/getuser').subscribe((response) => {
      this.userlist = response;
      // const localdata = localStorage.getItem('registerUsers');
      // if(localdata!= null)
      // {
      //   this.userlist =JSON.parse(localdata)
      // }
  })
  }

  
  login() {
    debugger
    this.loginservice.login(this.userdata.Email, this.userdata.Password).subscribe(
      (response: any) => {
        console.log(response)
        
          const firstToken = response.tokendata[response.tokendata.length -1];
          const tokenvalue = firstToken.Token
          const userid = firstToken.UserID
          const localstorage = localStorage.setItem('token', tokenvalue)
          if(userid){
          const Userid = localStorage.setItem('userid', userid)
          }
          if(localstorage !== null)
          {
           if(response.message == "Login successful"){
          M.toast({html: 'Login successfully', classes: 'rounded'});
          this.router.navigate(['/homepage']);
           }
          else{
          alert("wrong credentials")
          }
      }
      else{
        alert("Token not found in the local storage");
      }
    }
    // else{
    //   alert("No token data found in the response");
    // }
    //}
      
    );
  }
  
   
}
