import { Component } from '@angular/core';

@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent {

  constructor() {
    console.log('Listbook constructor called');
}
ngOnInit():void{
  console.log('ListBook Component rendered & Initialised');
}
ngOnDestroy(): void {
 console.log('Listbook component unloaded');

}
}
