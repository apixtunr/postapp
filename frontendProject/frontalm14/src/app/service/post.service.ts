import { HttpClient } from '@angular/common/http';
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
    return this.http.post(this.Url + "/api/posts", post);
  }

  getAllPosts(): Observable<any>{
    return this.http.get(this.Url + "/api/posts");
  }

  getPostById(postId: number): Observable<any>{
    return this.http.get(this.Url + "/api/posts/" + postId);
  }

  likePost(postId: number): Observable<any>{
    return this.http.put(this.Url + "/api/posts/" + postId+"/meGusta", {});
  }

  searchByName(name: string): Observable<any>{
    return this.http.get(this.Url + "/api/posts/buscar/" + name);
  }

}

