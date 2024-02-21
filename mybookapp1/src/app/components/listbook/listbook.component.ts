import { Component } from '@angular/core';
import { BookdaoService } from '../../services/bookdao.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../model/Book.';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent {

  bookarr:Book[];
  bookser:BookdaoService;
  editflag:boolean;
  temp!:Book;

  constructor(bookser:BookdaoService)
  {
    console.log('inside ListBook Component');
    this.bookser = bookser;
    this.bookarr= this.bookser.getallbooks();
    if(this.bookarr.length===0)
    console.log('book array is empty');
   else
    console.log('bookarr has no of books='+this.bookarr.length);
   this.editflag=false;


  }
   /* 
  for loop : diff types
  for/of let array = [1, 2, 3]; for (let a of array) { console. log(a); }
  forEach() let array = [1, 2, 3]; array. forEach(function(a, index) { console. log(a); });
  Plain for loop let array = [1, 2, 3]; for (let i = 0; i < array. length; i++) { console. log(array[i]); }
  */
  listbooks():void
  {
    console.log('inside list books');
    this.bookarr=this.bookser.getallbooks();
    if(this.bookarr.length===0)
      console.log('book array is empty');
    for(let b of this.bookarr)
    {
      console.log(b.bkid+','+b.bkname+','+b.bkprice);
    }
  }

  delBook(b:Book)
  {
    this.bookser.deleteBook(b);
    this.bookarr=this.bookser.getallbooks();
  }

  editBook(b:Book)
  {
    console.log('inside editBook');
    this.editflag=true;
    this.temp=new Book(b.bkid,b.bkname,b.bkprice);
   }

   updateBook(b:Book)
   {
      this.bookser.updateBook(b);
     this.bookarr = this.bookser.getallbooks();
     this.editflag=false;
   }
   
   cancelBook(b:Book)
   {
    this.editflag=false;
     return;
   }




}