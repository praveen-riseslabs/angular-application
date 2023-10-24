import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras  } from '@angular/router';
import { Userdata } from 'src/app/models/Userdata';
import { ForgotpasswordService } from 'src/app/services/forgotpassword/forgotpassword.service';
import { UserdataserviceService } from 'src/app/services/registeruser/userdataservice.service';
// import { ToasterService } from 'src/app/services/toastr/toaster.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  userdata: Userdata =  new Userdata();
  userlist :Userdata[] = [];
  emailData:any
  constructor(private forgotpasswordservice : ForgotpasswordService, 
     private router : Router, private userdataservice : UserdataserviceService) { }

  ngOnInit() {
    this.userdataservice.getUserData('http://127.0.0.1:5000/getuser').subscribe((response) => {
      this.userlist = response;
  })
  }

  // gToResetPassword() {
  //   debugger
  //   this.forgotpasswordservice.goToResetPassword(this.userdata.Email).subscribe(
  //     (response: any) => {
  //         if (response.exists) {
  //           // Email exists in the database, navigate to another page
  //           this.router.navigate(['/resetpassword']);
  //         } else {
  //           alert("Email doest not exist")
  //         }
  //       },
        
  //     );
  // }

  // checkEmailAvailability() {
  //   debugger
  //   this.forgotpasswordservice.chaeckEmail(this.userdata.Email).subscribe(
  //     (data: any) => {
  //       this.emailData = data.email_data.Email;
  //       if(this.userlist.find(e =>e.Email == this.emailData))
  //       {
  //        this.router.navigate(['/resetpassword', {email:this.emailData}]);
  //       }
  //       else{
  //         alert("Email does not exist")
  //       }
  //     },
  //   );
  // }

  checkEmailAvailability() {
    debugger
    this.forgotpasswordservice.checkEmail(this.userdata.Email).subscribe(
      (data: any) => {
        this.emailData = data.email_data.Email;
        if (this.userlist.find(e => e.Email === this.emailData)) {
          const navigationExtras: NavigationExtras = {
            replaceUrl: true, // Clears the current URL
          };
          this.router.navigate(['/resetpassword', { email: this.emailData }], navigationExtras);
        } else {
          alert("Email does not exist");
        }
      },
    );
  }
  

}
