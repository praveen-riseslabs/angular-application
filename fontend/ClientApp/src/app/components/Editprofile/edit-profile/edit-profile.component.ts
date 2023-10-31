import { Component, OnInit } from '@angular/core';
import { EditProfileService } from 'src/app/services/Editprofile/edit-profile.service';
import { Userdata } from 'src/app/models/Userdata';
import { UserdataserviceService } from 'src/app/services/registeruser/userdataservice.service';
declare var M : any;
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userdata:Userdata = new Userdata();
  userlist:Userdata[] = [];
  UserId : number;
  Usertoken : string;
  constructor(private editUserProfile : EditProfileService, private userdataservice : UserdataserviceService ) { }

  ngOnInit() {
    const currentUserId = localStorage.getItem('userid');
  const currentusertoken = localStorage.getItem('token');
  if (!currentUserId || !currentusertoken) {
    alert('User not found in localStorage');
    return;
  }

  this.UserId = Number(currentUserId);
  this.userdataservice.getUserData('http://127.0.0.1:5000/getuser').subscribe((response) => {
    this.userlist = response;
    this.userdata = this.userlist.find(a => a.UserID === this.UserId);
    console.log(this.userdata);
  });
  }

updateUserProfile(){
  const currentUserId = localStorage.getItem('userid');
  const currentusertoken = localStorage.getItem('token')
  if (!currentUserId && !currentusertoken) {
    alert('User not found in localStorage');
    return;
  }
  this.UserId = Number(currentUserId); 
  this.editUserProfile.updateUserProfile(this.UserId , this.userdata).subscribe((response =>{
    if(response.message == "Profile updated successfully!"){
      M.toast({html: 'User Data Updated', classes: 'rounded'});
      this.userdata = new Userdata()
    }
  }))
}

}
