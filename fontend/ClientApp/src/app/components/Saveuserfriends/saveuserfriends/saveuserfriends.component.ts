import { Component, OnInit } from '@angular/core';
import { UserFriendsData } from 'src/app/models/UserFriendsData';
import { SaveuserfriendsdataService } from 'src/app/services/saveuserfriendsdata/saveuserfriendsdata.service';
import { Userdata } from 'src/app/models/Userdata';
import { ActivatedRoute } from '@angular/router';
declare var M : any;
@Component({
  selector: 'app-saveuserfriends',
  templateUrl: './saveuserfriends.component.html',
  styleUrls: ['./saveuserfriends.component.css']
})
export class SaveuserfriendsComponent implements OnInit {
  userfrienddata:UserFriendsData = new UserFriendsData();
  userfriendlist:UserFriendsData[] = [];
  userlist:Userdata[] = [];
  currentuser : number;
  constructor(private saveuserfriendsdataservice : SaveuserfriendsdataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  //   this.saveuserfriendsdataservice.getUserData('http://127.0.0.1:5000/getuser').subscribe((response) => {
  //     this.userlist = response;
      
  // })
  
  }

  // onFileChange(event: any): void {
  //   const fileInput = event.target;
  //   if (fileInput.files.length > 0) {
  //     const file = fileInput.files[0];
  //     this.userfrienddata.Filedata = file;
  //   }
  // }

  saveUserFriendData(){
    debugger
   

    const currentUserId = localStorage.getItem('userid');
    if (!currentUserId) {
      alert('UserId not found in localStorage');
      return;
    }
    this.userfrienddata.UserID = Number(currentUserId); 

        this.saveuserfriendsdataservice.saveUserFriendData(this.userfrienddata).subscribe((response: any) => {
          if(response.message == "User Friend Data Saved!"){
            M.toast({html: 'User Friend Data Saved', classes: 'rounded'});
            this.ngOnInit()
            this.userfrienddata = new UserFriendsData();
          }     
          
        })
  }
    
    
   
  }



