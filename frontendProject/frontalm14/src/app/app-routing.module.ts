
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { LoginusersComponent } from './component/loginusers/loginusers.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { NewuserComponent } from './component/newuser/newuser.component';
import { CreatepostComponent } from './component/createpost/createpost.component';
import { MainpostComponent } from './component/mainpost/mainpost.component';
import { ViewpostComponent } from './component/viewpost/viewpost.component';
import { SingleviewpostComponent } from './component/singleviewpost/singleviewpost.component';
import { SearchpostComponent } from './component/searchpost/searchpost.component';

const routes: Routes = [
{path:"loginusers", component: LoginusersComponent},
{path:"menu", component: MenuComponent},
{ path:"principal",component:PrincipalComponent},
{ path: "newuser", component: NewuserComponent},
{ path: "createpost", component: CreatepostComponent}, 
{ path: "mainpost", component: MainpostComponent},
{ path: "viewpost", component: ViewpostComponent},
{ path: "singleviewpost/:id", component: SingleviewpostComponent},
{ path: "searchpost", component: SearchpostComponent},
{ path:"" , redirectTo: "loginusers", pathMatch : "full"},
{ path:"**" , redirectTo: "loginusers", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
