import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userdata } from 'src/app/models/Userdata';
import { ResetpasswordService } from 'src/app/services/resetpassword/resetpassword.service';
declare var M : any;

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  userdata:Userdata = new Userdata();
  constructor( private route: ActivatedRoute, private resetpasswordservice : ResetpasswordService, private router : Router) { }

  ngOnInit() {
    this.userdata.Email = this.route.snapshot.paramMap.get('email');
  }
  
  updatePassword():void{
    debugger
    this.resetpasswordservice.updatePassword(this.userdata).subscribe((response: any) => {
      if(response!=null){
        M.toast({html : "Password Updated", classes : 'rounded'})
        localStorage.removeItem("userid")
        localStorage.removeItem("token")
        this.router.navigate(['/login']);
      }     
      // this.userlist.push(this.userdata);
      // localStorage.setItem('registerUsers', JSON.stringify(this.userlist))
    })
  }
}
