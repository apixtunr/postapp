import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrl: './createpost.component.css'
})
export class CreatepostComponent {
  postForm!: FormGroup;
  etiquetas:string[]=[];

  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private postService: PostService){}
    

  ngOnInit() {
    this.postForm = this.fb.group({
      nombre: [null, Validators.required],
      contenido: [null, [Validators.required, Validators.maxLength(5000)]],
      imagen: [null, Validators.required],
      creador: [null, Validators.required]
    })
  }

add(event:any){
  const value = (event.value || '').trim();
  if(value){
    this.etiquetas.push(value);
  }
  event.chipInput!.clear();
}

remove(etiqueta:any){
  const index =this.etiquetas.indexOf(etiqueta);
  if(index>=0){
    this.etiquetas.splice(index, 1);
  }
}

createPost(){
  const data = this.postForm.value;
  data.etiquetas = this.etiquetas;

  this.postService.createNewPost(data).subscribe(res=>{
    this.snackBar.open("Su post ha sido creado", "ok");
    this.router.navigateByUrl("/principal");
  }, error=>{
    this.snackBar.open("Algo salió mal", "ok")
  })
  }
}

