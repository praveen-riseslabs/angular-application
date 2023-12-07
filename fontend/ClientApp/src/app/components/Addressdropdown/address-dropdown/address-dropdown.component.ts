import { Component, OnInit, AfterViewInit} from '@angular/core';
import { UserfriendslistService } from 'src/app/services/userfrindslistservice/userfriendslist.service';
import { UserFriendsData } from 'src/app/models/UserFriendsData';
import { AddressService } from 'src/app/services/Addressservice/address.service';
import { Countries, Districts, Mandals, States } from 'src/app/models/Addressdata';

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
              private addressService: AddressService) { }
  url:string='http://127.0.0.1:5000'
  ngOnInit() {
    this.initMaterializeSelect();
  this.getCountries()
  }
   ngAfterViewInit(): void {
  //   this.initMaterializeSelect();
  //   this.getCountries()
  }

  private initMaterializeSelect(): void {
  document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems);
  });
}
getAllFriendsList(){
  debugger 
  const currentUserId = localStorage.getItem('userid');
  this.UserId = Number(currentUserId);
      this.getAllFriendsListService.getAllFriendsList(this.UserId).subscribe((response: any) => {
        this.userfriendslist = response 
        console.log(this.userfriendslist)
      })
}

getCountries():void{
  debugger
  this.addressService.getCountries(this.url+'/getCountries').subscribe((resp:any)=>{
    this.countryList=resp;
    this.countries=resp;
  })
}

GetStatesbyId(country_id:number):void{
  debugger
  this.addressService.getStateById(this.url+'/getStates/'+country_id).subscribe((resp:any)=>{
    this.statesList=resp;
  })
}
getDistrictsbyId(state_id:number):void{
  this.addressService.getDistrictById(this.url+'/getDistricts/'+state_id).subscribe((resp:any)=>{
    this.districtsList=resp;
  })
}
getMandalsbyId(district_id:number):void{
  this.addressService.getMandalsbyId(this.url+'/getMandals/'+district_id).subscribe((resp:any)=>{
    this.mandalsList=resp;
  })
}
}
