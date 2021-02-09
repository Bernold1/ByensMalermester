import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  emailstring: string = 'mailto:email@byensmalermester.dk?Subject=Tilbud';
}
