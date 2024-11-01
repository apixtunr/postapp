import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private Url = environment.Url;

  constructor(private http: HttpClient) { }
  
  // Método para crear comentario
  crearComentario(postId: number, creador: string, contenido: string): Observable<any> {
    // Configurar los headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Crear el objeto de comentario
    const comentario = {
      postId: postId,
      creador: creador,
      contenido: contenido
    };

    // Enviar la solicitud POST con el objeto completo
    return this.http.post(`${this.Url}/api/comentarios/crear`, comentario, { 
      headers: headers,
      withCredentials: true // Importante para manejo de sesiones/autenticación
    });
  }

  // Método para obtener comentarios por post
  obtenerComentariosPorPost(postId: number): Observable<any> {
    // Usar HttpParams para manejar parámetros de manera más limpia
    const params = new HttpParams().set('postId', postId.toString());

    return this.http.get(`${this.Url}/api/comentarios`, {
      params: params,
      withCredentials: true // Importante para manejo de sesiones/autenticación
    });
  }
}
