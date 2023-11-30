import { Component, OnInit } from '@angular/core';
import { UserPictures } from 'src/app/models/UserPictures';
import { UserPicturesService } from 'src/app/services/userPictures/user-pictures.service';
declare var M : any;

@Component({
  selector: 'app-add-user-pictures',
  templateUrl: './add-user-pictures.component.html',
  styleUrls: ['./add-user-pictures.component.css']
})
export class AddUserPicturesComponent implements OnInit {

userPictureslist : UserPictures[] = [];
userpictures: UserPictures = new UserPictures();
currentuser : number;

  constructor(private userPicturesservice : UserPicturesService) { }

  ngOnInit() {
    this.fetchPhotos()
  }

  
  onFileChange(event: any): void {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.userpictures.Picture = file;
    }
  }

  saveUserFriendData(){
    debugger
    const currentUserId = localStorage.getItem('userid');
    if (!currentUserId) {
      alert('UserId not found in localStorage');
      return;
    }
    this.userpictures.UserID = Number(currentUserId); 

    const formData = new FormData();
    formData.append('UserID', this.userpictures.UserID.toString());
    formData.append('Picture', this.userpictures.Picture);

        this.userPicturesservice.saveUserFriendData(formData).subscribe((response: any) => {
          if(response.message == "User Picture Data Saved!"){
            M.toast({html: 'User Picture Data Saved', classes: 'rounded'});
            this.ngOnInit()
            this.userpictures = new UserPictures();
          }     
          
        })
  }

  fetchPhotos(): void {
    debugger
    this.userPicturesservice.getPhotos().subscribe(photos => {
      this.userPictureslist = photos;
    });
  }

  updatePhoto(index: number, newPhoto: string): void {
    this.userPicturesservice.updatePhoto(index, newPhoto).subscribe(() => {
      this.fetchPhotos(); // Refresh the photos after update
    });
  }

  deletePhoto(index: number): void {
    this.userPicturesservice.deletePhoto(index).subscribe(() => {
      this.fetchPhotos(); // Refresh the photos after deletion
    });
  }

}
