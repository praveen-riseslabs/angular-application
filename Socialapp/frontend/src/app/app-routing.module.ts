import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialappComponent } from './Components/socialapp/Social.app.component';

const routes: Routes = [
  {
    path:"", redirectTo:"/socialapp", pathMatch: 'full'
  },
  {
    path:"socialapp", component:SocialappComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
