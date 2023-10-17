import { Component, OnInit } from '@angular/core';
import { Userdata } from 'src/app/models/Userdata';
import { UserdataserviceService } from 'src/app/services/registeruser/userdataservice.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userdata:Userdata = new Userdata();
  userlist:Userdata[] = [];
  confirmPassword : string = '';
  passwordError:string = '';
  constructor(private userdataservice : UserdataserviceService) { }

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
saveUserData() {
  debugger
  this.userdataservice.saveUserData(this.userdata).subscribe((response: any) => {
    if(response!=null){
      alert("user data saved");
      this.ngOnInit()
      this.userdata = new Userdata();
    }     
    // this.userlist.push(this.userdata);
    // localStorage.setItem('registerUsers', JSON.stringify(this.userlist))
  })
}

validateFields(value: string): boolean {
  
  if(this.userdata.Firstname !== undefined){
    const regex = /^[A-Za-z]+$/; 
  return regex.test(value);
  }
  else if(this.userdata.Lastname !== undefined){
    const regex = /^[A-Za-z]+$/; 
    return regex.test(value);
  }
  else if(this.userdata.Email !== undefined){
  const regex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/; 
  return regex.test(value);
  }
  else if(this.userdata.Password !==  undefined){
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,16}$/; 
    return regex.test(value);
  }
}
validateConfirmPassword(){
  this.passwordError = this.userdata.Password !== this.confirmPassword ? 'Passwords do not match' : '';
}
isFormValid(): boolean {
  return this.userdata && this.confirmPassword && !this.passwordError;
}



}
