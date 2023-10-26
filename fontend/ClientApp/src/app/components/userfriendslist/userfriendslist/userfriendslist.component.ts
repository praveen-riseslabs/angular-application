import { Component, OnInit } from '@angular/core';
import { UserFriendsData } from 'src/app/models/UserFriendsData';
import { UserfriendslistService } from 'src/app/services/userfrindslistservice/userfriendslist.service';

@Component({
  selector: 'app-userfriendslist',
  templateUrl: './userfriendslist.component.html',
  styleUrls: ['./userfriendslist.component.css']
})
export class UserfriendslistComponent implements OnInit {

  UserId : number;
  userfrienddata:UserFriendsData = new UserFriendsData();
  userfriendslist : UserFriendsData[] = [];
  constructor(private getAllFriendsListService : UserfriendslistService) { }

  ngOnInit() {
    this.getAllFriendsList()
  }

  getAllFriendsList(){
    debugger
    const currentUserId = localStorage.getItem('userid');
    if (!currentUserId) {
      alert('UserId not found in localStorage');
      return;
    }
    this.UserId = Number(currentUserId); 

        this.getAllFriendsListService.getAllFriendsList(this.UserId).subscribe((response: any) => {
          this.userfriendslist = response 
          console.log(this.userfriendslist)
        })
  }

}
