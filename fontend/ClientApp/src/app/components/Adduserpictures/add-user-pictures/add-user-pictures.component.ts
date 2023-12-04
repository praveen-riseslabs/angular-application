import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
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

  constructor(private userPicturesservice : UserPicturesService, private cdr : ChangeDetectorRef) { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.modal');
      M.Modal.init(elems);
    });
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
      console.log(this.userPictureslist)
    });
  }
  triggerRerender() {
    this.cdr.detectChanges();
  }

  editPhoto(pictureId: number): void {
    this.userpictures.PictureId = pictureId;
    this.userpictures.Picture = null;
    const modalInstance = M.Modal.getInstance(document.getElementById('editModal'));
    modalInstance.open();
  }
   
  updatePhoto(pictureId: number): void {
    debugger
    if ( pictureId) {
        // this.userpictures.PictureId == index
      const formData = new FormData();
      formData.append('PictureId', this.userpictures.PictureId.toString());
      formData.append('Picture', this.userpictures.Picture);  
      this.userPicturesservice.updatePhoto(pictureId,formData).subscribe((response: any) => {
        this.fetchPhotos(); 
        this.cancelSelection();
        const modalInstance = M.Modal.getInstance(document.getElementById('editModal'));
        modalInstance.close();
      });
    } else {
      console.log('No picture selected for update');
    }
  }
   
  cancelSelection(): void {
    this.userpictures.Picture = undefined;
    const modalInstance = M.Modal.getInstance(document.getElementById('editModal'));
    modalInstance.close();
  }

  deletePhoto(index: number): void {
    debugger
    this.userPicturesservice.deletePhoto(index).subscribe(() => {
      this.fetchPhotos();
      M.toast({html: ' Picture deleted', classes: 'rounded'});
    });
  }

}
