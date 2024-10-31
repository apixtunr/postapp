import { LoginusersComponent } from './component/loginusers/loginusers.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { MenuComponent } from './component/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './component/principal/principal.component';
import { NewuserComponent } from './component/newuser/newuser.component';
import { CreatepostComponent } from './component/createpost/createpost.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MainpostComponent } from './component/mainpost/mainpost.component';
import { ViewpostComponent } from './component/viewpost/viewpost.component';
import { SingleviewpostComponent } from './component/singleviewpost/singleviewpost.component';
import { SearchpostComponent } from './component/searchpost/searchpost.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginusersComponent,
    PrincipalComponent,
    NewuserComponent,
    CreatepostComponent,
    MainpostComponent,
    ViewpostComponent,
    SingleviewpostComponent,
    SearchpostComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,  
    AngularMaterialModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
