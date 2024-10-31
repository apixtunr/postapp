import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComentarioService } from '../../service/comentario.service';

@Component({
  selector: 'app-singleviewpost',
  templateUrl: './singleviewpost.component.html',
  styleUrl: './singleviewpost.component.css'
})
export class SingleviewpostComponent {

  postId = this.activatedRoute.snapshot.params['id'];
  postData: any;
  comentarioForm!: FormGroup;
  comentarios:any;

  constructor(private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private fb: FormBuilder,
    private comentarioService: ComentarioService
  ){}

  ngOnInit(){
    this.getPostById();

    this.comentarioForm = this.fb.group({
      creador:[null, Validators.required],
      contenido:[null, Validators.required],
     })
   }

   publicarComentario(){
    let creador = this.comentarioForm.get("creador")?.value;
    let contenido = this.comentarioForm.get("contenido")?.value;

    this.comentarioService.crearComentario(this.postId, creador, contenido).subscribe(res=>{
      this.matSnackBar.open("Comentario publicado exitosamente", "ok");
      this.getCommentsByPost();
    }, error=> {
      this.matSnackBar.open("Algo salió mal", "ok")
    })
   }
   
  getPostById(){
    this.postService.getPostById(this.postId).subscribe(res=>{
      this.postData=res;
      this.getCommentsByPost();
      console.log(res)
    },error=>{
      this.matSnackBar.open("Algo salió mal", "ok")
    })
  }

  getCommentsByPost(){
    this.comentarioService.obtenerComentariosPorPost(this.postId).subscribe(res=>{
      this.comentarios = res;
    },error=>{
      this.matSnackBar.open("Algo salió mal", "ok")
    })
  }

  likePost() {
    this.postService.likePost(this.postId).subscribe(res => {
      this.matSnackBar.open("Su like ha sido agregado al post", "ok");
  
      // Actualizar manualmente el contador de likes en el frontend
      this.postData.likes++;  // Asumiendo que 'likes' es el atributo para el contador de likes
    }, error => {
      this.matSnackBar.open("Algo salió mal", "ok");
    });
  }
  
}
