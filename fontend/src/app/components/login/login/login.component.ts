import { Component, OnInit } from '@angular/core';
import { Userdata } from 'src/app/models/Userdata';
import { UserdataserviceService } from 'src/app/services/userdataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdata: Userdata =  new Userdata();
  userlist :Userdata[] = [];
  constructor(private userdataservice : UserdataserviceService) { }

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

  login(){
    const isUserExist = this.userlist.find(user =>user.Email ===  this.userdata.Email && user.Password == this.userdata.Password );
  if(isUserExist != undefined)

  {
    alert("logged in successfully")
  }
  else{
    alert("wrong  credentials")
  }
  }
}
