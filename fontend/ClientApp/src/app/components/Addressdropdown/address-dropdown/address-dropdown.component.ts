import { Component, OnInit, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { UserfriendslistService } from 'src/app/services/userfrindslistservice/userfriendslist.service';
import { UserFriendsData } from 'src/app/models/UserFriendsData';
import { AddressService } from 'src/app/services/Addressservice/address.service';
import { Countries, Districts, Mandals, States } from 'src/app/models/Addressdata';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

declare var M:any;
@Component({
  selector: 'app-address-dropdown',
  templateUrl: './address-dropdown.component.html',
  styleUrls: ['./address-dropdown.component.css']
})
export class AddressDropdownComponent implements OnInit, AfterViewInit {
  UserId : number;
  userfrienddata:UserFriendsData = new UserFriendsData();
  userfriendslist : UserFriendsData[] = [];
  countries:Countries = new Countries();
  countryList : Countries[] = [];
  states: States = new States();
  statesList : States[]=[];
  districts: Districts = new Districts();
  districtsList : Districts[]=[];
  mandals: Mandals = new Mandals();
  mandalsList: Mandals[]=[];

  

  constructor(private getAllFriendsListService : UserfriendslistService,
              private addressService: AddressService,private cdr: ChangeDetectorRef
              , private http : HttpClient) { }
  url:string='http://127.0.0.1:5000'
  ngOnInit() {
    this.initMaterializeSelect();
    this.getcountries()
  }
   ngAfterViewInit(): void {
  //   this.initMaterializeSelect();
  //   this.getCountries()
  }

  private initMaterializeSelect(): void {
  document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  });
}
// getAllFriendsList(){
//   debugger 
//   const currentUserId = localStorage.getItem('userid');
//   this.UserId = Number(currentUserId);
//       this.getAllFriendsListService.getAllFriendsList(this.UserId).subscribe((response: any) => {
//         this.userfriendslist = response 
//         console.log(this.userfriendslist)
//       })
// }

// getCountries():Observable<countryList1 []>{
//   debugger
//   return this.addressService.getCountries<countryList1 []>(this.url+'/getCountries').subscribe((resp:any)=>{
//     countryList1 = resp;
//     this.countryList=countryList1;
//     this.initMaterializeSelect();
    
//   })
  
// }

getcountries(): Observable<Countries[]> {
  
  return this.http.get<Countries[]>(this.url+'/getCountries')
    }
    
GetStatesbyId(country_id):void{
  debugger
  this.addressService.getStateById(this.url+'/getStates/'+country_id).subscribe((resp:any)=>{
    this.statesList=resp;
    this.initMaterializeSelect();
  })
}
getDistrictsbyId(state_id):void{
  this.addressService.getDistrictById(this.url+'/getDistricts/'+state_id).subscribe((resp:any)=>{
    this.districtsList=resp;
  })
}
getMandalsbyId(district_id):void{
  this.addressService.getMandalsbyId(this.url+'/getMandals/'+district_id).subscribe((resp:any)=>{
    this.mandalsList=resp;
  })
}
}
