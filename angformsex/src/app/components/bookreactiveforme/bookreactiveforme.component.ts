import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookreactiveforme',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './bookreactiveforme.component.html',
  styleUrl: './bookreactiveforme.component.css'
})
export class BookreactiveformeComponent implements OnInit {
  bookForm!: FormGroup;


  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  ngOnInit(): void {
  }

  createForm() {
    this.bookForm = this.fb.group({
      bookid:1,
      bookname: ['LearnAngular',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{5,15}$') ]],
      bookprice:1200,
     
  });
    
}


mysubmit()
   {
      console.log('inside form mysubmit method');
      console.log(this.bookForm.status);
      console.log(this.bookForm.get('bookname')?.status)

      if(this.bookForm.status=="VALID")
      {
      let bookname =  this.bookForm.get('bookname')?.value;

      }
      else
      {
        console.log('bookform is invalid, dont extract values');
      }
     
   }

}
