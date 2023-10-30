import { Component, OnInit } from '@angular/core';
import { EditProfileService } from 'src/app/services/Editprofile/edit-profile.service';
import { Userdata } from 'src/app/models/Userdata';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userdata:Userdata = new Userdata();
  userlist:Userdata[] = [];
  UserId : number;

  constructor(private editUserProfile : EditProfileService) { }

  ngOnInit() {
  }

updateUserProfile(){
  const currentUserId = localStorage.getItem('userid');
  if (!currentUserId) {
    alert('UserId not found in localStorage');
    return;
  }
  this.UserId = Number(currentUserId); 

  this.editUserProfile.updateUserProfile(this.UserId , this.userdata).subscribe((response =>{

    if(response.message == "Profile updated successfully!"){
      alert("User data updated")
    }
  }))
}

}
