import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-searchpost',
  templateUrl: './searchpost.component.html',
  styleUrl: './searchpost.component.css'
})
export class SearchpostComponent {

  allPosts:any;
  nombre: any="";
  
  constructor(private postService: PostService, private snackBar: MatSnackBar){}

  searchByName(){
    this.postService.searchByName(this.nombre).subscribe(res=>{
      this.allPosts=res;
    }, error=>{
      this.snackBar.open("Algo salió mal", "ok")
    })
  }
}
