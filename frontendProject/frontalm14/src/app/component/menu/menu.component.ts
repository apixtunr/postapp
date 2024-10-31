import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  title = 'frontalm14';
  sesionIniciada: boolean = false;

  constructor(private router: Router) {
    let t = localStorage.getItem("user");
    this.sesionIniciada = !!t;
  }

  logout() {
    // Elimina la información de sesión
    localStorage.clear();

    // Redirige al usuario al login usando Angular Router
    this.router.navigate(['/login']);
  }
}
