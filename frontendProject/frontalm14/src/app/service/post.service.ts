import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
 providedIn: 'root'
})
export class PostService {
 private Url = environment.Url;
 
 constructor(private http: HttpClient) { }
 
 createNewPost(post: any): Observable<any> {
   const headers = new HttpHeaders({
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   });

   return this.http.post(`${this.Url}/api/posts`, post, {
     headers,
     withCredentials: true
   });
 }

 getAllPosts(): Observable<any> {
   const headers = new HttpHeaders({
     'Accept': 'application/json'
   });

   return this.http.get(`${this.Url}/api/posts`, {
     headers,
     withCredentials: true
   });
 }

 getPostById(postId: number): Observable<any> {
   const headers = new HttpHeaders({
     'Accept': 'application/json'
   });

   return this.http.get(`${this.Url}/api/posts/${postId}`, {
     headers,
     withCredentials: true
   });
 }

 likePost(postId: number): Observable<any> {
   const headers = new HttpHeaders({
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   });

   return this.http.put(`${this.Url}/api/posts/${postId}/meGusta`, {}, {
     headers,
     withCredentials: true
   });
 }

 searchByName(name: string): Observable<any> {
   const headers = new HttpHeaders({
     'Accept': 'application/json'
   });

   return this.http.get(`${this.Url}/api/posts/buscar/${name}`, {
     headers,
     withCredentials: true
   });
 }
}
