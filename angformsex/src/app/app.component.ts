import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooktemplatedrivenformComponent } from './components/booktemplatedrivenform/booktemplatedrivenform.component';
import { CommonModule } from '@angular/common';
import { EmpReactiveComponent } from './components/emp-reactive/emp-reactive.component';
import { BookreactiveformeComponent } from './components/bookreactiveforme/bookreactiveforme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BooktemplatedrivenformComponent,CommonModule,EmpReactiveComponent,BookreactiveformeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angformsex';
}
