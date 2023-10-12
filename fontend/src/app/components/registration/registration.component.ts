import { Component, OnInit } from '@angular/core';
import { UserdataserviceService } from 'src/app/services/userdataservice.service';
import { Userdata } from 'src/app/models/Userdata';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userdata:Userdata = new Userdata();
  userlist:Userdata[] = [];
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
saveUserData() {
  debugger
  this.userdataservice.saveUserData(this.userdata).subscribe((response: any) => {
    if(response!=null){
      alert("user data saved");
      this.ngOnInit()
      this.userdata = new Userdata();
    }     
    this.userlist.push(this.userdata);
    localStorage.setItem('registerUsers', JSON.stringify(this.userlist))
  })
}

}
