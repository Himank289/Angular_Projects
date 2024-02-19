import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // template:`<p>Hi,{{title}} </p>
  // <h4>Hello start learning angular</h4>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'my-first-application';
  mybook:{name:string,price:number}={name:'OOPS',price:1200};
}
