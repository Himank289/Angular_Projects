import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MybookComponent } from './components/mybook/mybook.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,MybookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mybookapp';
}
