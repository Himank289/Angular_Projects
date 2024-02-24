import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { ChangefontsizeDirective } from './directives/changefontsize.directive';
import { DomChangeDirective } from './directives/domchange.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HighlightDirective,ChangefontsizeDirective,DomChangeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnChanges{
  title = 'customdirectiveex';
  mycolor:string="pink";

  constructor(){
    console.log('app component constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('appcomponent on changes lifecyce method called');
  }

  ngOnInit(){
    console.log('ngonint appcomponent called');
  }
}
