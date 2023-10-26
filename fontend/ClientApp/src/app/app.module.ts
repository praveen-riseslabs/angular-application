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
    UserfriendslistComponent
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
