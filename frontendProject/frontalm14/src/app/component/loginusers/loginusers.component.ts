import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-loginusers',
  templateUrl: './loginusers.component.html',
  styleUrl: './loginusers.component.css'
})
export class LoginusersComponent {

user: any = {};
  constructor(private UserService: UserService, private router:Router) {}

  login() {
    let validarFormulario: any = document.getElementById("loginForm");
    if (validarFormulario.reportValidity()) {
     this.UserService.login(this.user).subscribe(
        (u: any) => this.darBienvenida(u)
      );
    }
  }

  darBienvenida(user:any){
    if(user){
      let t = JSON.stringify(user);
      localStorage.setItem("user", t);
      this.user={};
      location.href="/principal"
      alert("Bienvenido " + user.nombre)
    }else{
      alert("Usuario o Password inválidos")
    }
  }
}
