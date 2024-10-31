import { Component } from '@angular/core';
import { User } from '../../entity/user';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {
  user = new User();
  tmpuser = new User();

  constructor(private service: UserService, private router: Router) {}
  ngOnInit(): void {}

  Cancel() {
    this.router.navigate(["loginuser"]);
  }

  Save(user: User) {
    if (user.correo && user.pass && user.nombre && user.direccion && user.telefono) {
      this.service.addUsers(user).subscribe(result => {
        if (result != null) {
          alert("Usuario creado exitosamente, ahora pruebe ingresar");
          this.router.navigate(["loginusers"]);
        } else {
          alert("Usuario ya existe, verifique");
        }
      });
    } else {
      alert("Uno o más campos se encuentran vacíos, rellene los campos para continuar");
    }
  }

}
