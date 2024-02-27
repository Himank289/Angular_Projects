import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooktemplatedrivenformComponent } from './components/booktemplatedrivenform/booktemplatedrivenform.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BooktemplatedrivenformComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angformsex';
}
