import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private Url = environment.Url;

  constructor(private http: HttpClient) { }
  
  // Método para crear un nuevo post
  createNewPost(post: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.Url}/api/posts`, post, {
      headers: headers,
      withCredentials: true
    });
  }

  // Método para obtener todos los posts
  getAllPosts(): Observable<any> {
    return this.http.get(`${this.Url}/api/posts`, {
      withCredentials: true
    });
  }

  // Método para obtener un post por ID
  getPostById(postId: number): Observable<any> {
    return this.http.get(`${this.Url}/api/posts/${postId}`, {
      withCredentials: true
    });
  }

  // Método para dar like a un post
  likePost(postId: number): Observable<any> {
    return this.http.put(`${this.Url}/api/posts/${postId}/meGusta`, {}, {
      withCredentials: true
    });
  }

  // Método para buscar posts por nombre
  searchByName(name: string): Observable<any> {
    // Usar HttpParams para manejar parámetros de búsqueda
    const params = new HttpParams().set('nombre', name);

    return this.http.get(`${this.Url}/api/posts/buscar`, {
      params: params,
      withCredentials: true
    });
  }
}

