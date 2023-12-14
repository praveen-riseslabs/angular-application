import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef
} from "@angular/core";
import { UserfriendslistService } from "src/app/services/userfrindslistservice/userfriendslist.service";
import { UserFriendsData } from "src/app/models/UserFriendsData";
import { AddressService } from "src/app/services/Addressservice/address.service";
import {
  Countries,
  Districts,
  Mandals,
  States
} from "src/app/models/Addressdata";
import { Observable, Observer, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

declare var M: any;

@Component({
  selector: "app-address-dropdown",
  templateUrl: "./address-dropdown.component.html",
  styleUrls: ["./address-dropdown.component.css"]
})
export class AddressDropdownComponent implements OnInit, AfterViewInit {
 UserId: number;
  userfrienddata: UserFriendsData = new UserFriendsData();
  userfriendslist: UserFriendsData[] = [];
  countries: Countries = new Countries();
  countryList: Observable<Countries[]>;
  states: States = new States();
  statesList: States[] = [];
  districts: Districts = new Districts();
  districtsList: Districts[] = [];
  mandals: Mandals = new Mandals();
  mandalsList: Mandals[] = [];

  constructor(
    private getAllFriendsListService: UserfriendslistService,
    private addressService: AddressService,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {}

  url: string = "http://127.0.0.1:5000";
  ngOnInit() {
    this.initMaterializeSelect();
    this.getCountries();
  }

  ngAfterViewInit(): void {
    this.initMaterializeSelect();
   // this.getCountries();
  }

  private initMaterializeSelect(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems);
      
    });
  }

  getCountries() {
    this.addressService.getCountries(this.url + "/getCountries").subscribe((resp:any) => {
      this.countryList = of(resp);
      this.initMaterializeSelect();
    });
    
  }

  GetStatesbyId(country_id): void {
    this.addressService
      .getStateById(this.url + "/getStates/" + country_id)
      .subscribe((resp: any) => {
        //  new Observable((observer)
        this.statesList = resp;
        this.initMaterializeSelect();
      });
  }
  getDistrictsbyId(state_id): void {
    this.addressService
      .getDistrictById(this.url + "/getDistricts/" + state_id)
      .subscribe((resp: any) => {
        this.districtsList = resp;
      });
  }
  getMandalsbyId(district_id): void {
    this.addressService
      .getMandalsbyId(this.url + "/getMandals/" + district_id)
      .subscribe((resp: any) => {
        this.mandalsList = resp;
      });
  }

  saveAddress(){
    
  }
}
