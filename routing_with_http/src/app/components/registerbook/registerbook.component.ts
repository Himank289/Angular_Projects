import { Component } from '@angular/core';

@Component({
  selector: 'app-registerbook',
  standalone: true,
  imports: [],
  templateUrl: './registerbook.component.html',
  styleUrl: './registerbook.component.css'
})
export class RegisterbookComponent {


  constructor() {
    console.log('Register constructor called');
}
ngOnInit():void{
  console.log('Register Component rendered & Initialised');
}
ngOnDestroy(): void {
 console.log('Register component unloaded');

}
}
