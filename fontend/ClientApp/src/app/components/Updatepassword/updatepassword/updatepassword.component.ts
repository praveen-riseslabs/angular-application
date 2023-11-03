import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userdata } from 'src/app/models/Userdata';
import { UpdatepasswordService } from 'src/app/services/updatepassword/updatepassword.service';
declare var M : any
@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
 token: string
 userdata : Userdata =  new Userdata()
 tokenFromApi: string
  constructor(
    private route: ActivatedRoute,
    private updatePasswordService: UpdatepasswordService,
    private router :Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  updatePassword() {
    this.updatePasswordService.updatePassword(this.token, this.userdata.Password)
      .subscribe(response => {
        if(this.tokenFromApi = response.token)
        {
          M.toast({html: 'Password Updated Successfully', classes: 'rounded'});
        
          this.router.navigate(['/login']);
        }
        else{
         alert("error while sending password")
        }
      }, error => {
        // Handle error
      });
  }

}
