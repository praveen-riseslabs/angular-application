import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword/resetpassword.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { LogoutuserComponent } from './components/logoutuser/logoutuser.component';
import { SaveuserfriendsComponent } from './components/Saveuserfriends/saveuserfriends/saveuserfriends.component';
import { UserfriendslistComponent } from './components/userfriendslist/userfriendslist/userfriendslist.component';
import { EditProfileComponent } from './components/Editprofile/edit-profile/edit-profile.component';
import { UpdatepasswordComponent } from './components/Updatepassword/updatepassword/updatepassword.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { AddUserPicturesComponent } from './components/Adduserpictures/add-user-pictures/add-user-pictures.component';
import { AddressDropdownComponent } from './components/Addressdropdown/address-dropdown/address-dropdown.component';
import {  SocialappComponent } from './components/socialapp/Social.app.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    HomepageComponent,
    LogoutuserComponent,
    SaveuserfriendsComponent,
    UserfriendslistComponent,
    EditProfileComponent,
    UpdatepasswordComponent,
    DashboardComponent,
    AddUserPicturesComponent,
    AddressDropdownComponent,
    SocialappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    // ToastrModule.forRoot({
    //   timeOut: 3000, // Show the notification for 3 seconds
    //   positionClass: 'toast-top-right', // Position of the notification
    //   preventDuplicates: true, // Prevent duplicate notifications
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
