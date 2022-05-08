import { Component } from '@angular/core';
import { Insta } from './model/instagram.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city! : Insta[];
}
