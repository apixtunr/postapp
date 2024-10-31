import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatChipsModule} from '@angular/material/chips';
import { MatInputModule} from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    MatToolbarModule,  // Para <mat-toolbar>
    MatIconModule,     // Para <mat-icon>
    MatButtonModule,  // Para botones como <button mat-icon-button>
    MatCardModule,
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    MatGridListModule,
    CommonModule
    
  ]
})
export class AngularMaterialModule { }
