import { Component } from '@angular/core';
import { Book } from '../../model/Book.';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booktemplatedrivenform',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './booktemplatedrivenform.component.html',
  styleUrl: './booktemplatedrivenform.component.css'
})
export class BooktemplatedrivenformComponent {
  book:Book;


  constructor(){
    this.book=new Book(1,'Learn Angular',700);
  }

  onSubmit(form:any){
    console.log(form);
    console.log(form.value);
    console.log(this.book.toString());

  }

}
