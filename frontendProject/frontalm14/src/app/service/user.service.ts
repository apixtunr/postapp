import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entity/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Url = environment.Url;

  // Opciones de HTTP generales con credenciales
  private httpOptionsWithCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }),
    withCredentials: true
  };

  // Opciones de HTTP sin credenciales (útil para login)
  private httpOptionsDefault = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Método para registrar usuarios
  addUsers(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.Url}/api/create_users`, 
      user, 
      this.httpOptionsWithCredentials
    );
  }

  // Método de login
  login(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.Url}/user/login`, 
      user, 
      this.httpOptionsDefault
    );
  }
}
