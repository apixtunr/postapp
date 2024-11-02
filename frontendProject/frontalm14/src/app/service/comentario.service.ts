import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private Url = environment.Url;
  
  constructor(private http: HttpClient) { }

  crearComentario(postId: number, creador: string, contenido: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const params = { 
      postId: postId,
      creador: creador
    };

    return this.http.post(`${this.Url}/api/comentarios/crear`, contenido, {
      headers,
      params,
      withCredentials: true
    });
  }

  obtenerComentariosPorPost(postId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.get(`${this.Url}/api/comentarios/${postId}`, {
      headers,
      withCredentials: true
    });
  }
}
