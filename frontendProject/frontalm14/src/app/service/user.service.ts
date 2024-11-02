import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entity/user';
import { environment } from '../../environments/environment';

@Injectable({
 providedIn: 'root'
})
export class UserService {
 private Url = environment.Url;
 private httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   }),
   withCredentials: true
 };

 constructor(private http: HttpClient) { }

 addUsers(user: User) {
   return this.http.post<User>(`${this.Url}/api/create_users`, user, {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Accept': 'application/json'  
     }),
     withCredentials: true
   });
 }

 login(user: User) {
   return this.http.post<User>(`${this.Url}/api/user/login`, user, {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     }),
     withCredentials: true
   });
 }
}
