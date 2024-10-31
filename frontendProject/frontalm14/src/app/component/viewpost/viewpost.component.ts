import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrl: './viewpost.component.css'
})
export class ViewpostComponent {

  allPosts:any;

  constructor(private postService: PostService,
    private snackBar: MatSnackBar
   ){}

   ngOnInit(){
    this.getAllPosts();
   }

   getAllPosts(){
    this.postService.getAllPosts().subscribe(res=>{
      console.log(res);
      this.allPosts = res;
    }, error =>{
      this.snackBar.open("Algo salió mal", "ok");
    })
   }
}
