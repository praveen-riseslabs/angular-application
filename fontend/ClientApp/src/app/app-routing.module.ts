import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword/resetpassword.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { LogoutuserComponent } from './components/logoutuser/logoutuser.component';
import { UserfriendslistComponent } from './components/userfriendslist/userfriendslist/userfriendslist.component';
import { SaveuserfriendsComponent } from './components/Saveuserfriends/saveuserfriends/saveuserfriends.component';
import { EditProfileComponent } from './components/Editprofile/edit-profile/edit-profile.component';
const routes: Routes = [{
  path:"login", component:LoginComponent},
  {
    path: 'homepage',
    component: HomepageComponent,
    children: [
      { path: 'adduserfriends', component: SaveuserfriendsComponent },
      { path: 'edituser', component: EditProfileComponent},
      { path: 'userfriendslist', component: UserfriendslistComponent},
      { path: 'resetpassword', component: ResetpasswordComponent}
    ]
  },
  {
    path:"", redirectTo:"/login", pathMatch: 'full'
  },
  {
    path:"register", component:RegistrationComponent
  },
  {
    path: "forgotpassword", component: ForgotpasswordComponent
  },
  // {
  //   path:"forgotpassword", component:ResetpasswordComponent
  // },
  {
    path: "logout", component:LogoutuserComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
