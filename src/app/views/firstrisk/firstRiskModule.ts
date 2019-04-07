
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    ],
  declarations: [
    
  ]
})
export class FirstRiskModule { }
