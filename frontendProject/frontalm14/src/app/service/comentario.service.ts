import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private Url = environment.Url;

  constructor(private http: HttpClient) { }

  crearComentario(postId:number, creador: string, contenido:string):Observable<any>{
    let params = { 
      postId: postId,
      creador: creador
    }
    return this.http.post(this.Url+"/api/comentarios/crear", contenido, {params});
  }

  obtenerComentariosPorPost(postId:number):Observable<any>{
    return this.http.get(this.Url+"/api/comentarios/" + postId);
  }
}
