import { Component } from '@angular/core';
import { Book } from './Model/Book.';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mybook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mybook.component.html',
  styleUrl: './mybook.component.css'
})
export class MybookComponent {
  mybook1:Book;
  bookarr:Book[];
  status:string;

  constructor(){
    console.log("inside app component constructor");
    this.mybook1=new Book(2,'Learn Nodejs',8000);
    this.bookarr=[];
    this.status='';
    console.log(this.mybook1);
  }

  addBook():void{
    console.log(this.mybook1);
    if(this.mybook1.bkid>0 && this.mybook1.bkname!=' '&&this.mybook1.bkprice>0.0){
      this.bookarr.push(this.mybook1);

      this.status=this.mybook1.toString()+"submitted sucessfully";
      this.mybook1=new Book();
      
    }
    else{
      this.status='bookcannot be submitted ,book validation failed';
      if(this.mybook1.bkid<0)
      { this.status+="book id cannot be zero or negative"}
      if(this.mybook1.bkprice<0)
      { this.status+="book price cannot be zero or negative"}
      if(this.mybook1.bkname=='')
      { this.status+="book name cannot be blank"}

    }
  }
}
