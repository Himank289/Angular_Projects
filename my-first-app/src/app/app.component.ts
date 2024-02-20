import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Book } from './model/Book.';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  // template:`<p>Hi,{{title}} </p>
  // <h4>Hello start learning angular</h4>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string;
  mybook:{name:string,price:number};
  mybook1:Book;
  temp!:Book;
  bookarr:Book[];
  status:string;

  constructor(){
    console.log("inside app component constructor");
    this.title='my-first-application';
    this.mybook={name:'Learn Angular',price:1200};
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
   

  // changebookname(bkname_ipcntrl: 
  //   HTMLInputElement):void
  // {
  //   console.log("in changebookname function");
  //   console.dir(bkname_ipcntrl);
  //   this.mybook.name=bkname_ipcntrl.value;

  // }
  changebookname1(bkname_ipcntrl: 
    string):void
  {
    console.log("in changebookname1 function");
    console.dir(bkname_ipcntrl);
    this.mybook.name=bkname_ipcntrl;

  }
}
