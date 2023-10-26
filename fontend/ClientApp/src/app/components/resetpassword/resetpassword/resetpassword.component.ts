import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userdata } from 'src/app/models/Userdata';
import { ResetpasswordService } from 'src/app/services/resetpassword/resetpassword.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  userdata:Userdata = new Userdata();
  constructor( private route: ActivatedRoute, private resetpasswordservice : ResetpasswordService, private router : Router) { }

  ngOnInit() {
    debugger
    this.userdata.Email = this.route.snapshot.paramMap.get('email');
  }
  
  updatePassword():void{
    debugger
    
    this.resetpasswordservice.updatePassword(this.userdata).subscribe((response: any) => {
      if(response!=null){
        alert("user data updated");
        this.router.navigate(['/login']);
        localStorage.removeItem("userid")
        localStorage.removeItem("token")
      }     
      // this.userlist.push(this.userdata);
      // localStorage.setItem('registerUsers', JSON.stringify(this.userlist))
    })
  }
}
