import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  title: string = 'Angular Pipes';
  count: number = 285634;
  decValue:  number = 3.1415927;
  currVal: number = 99.589;
  today: Date = new Date();

}
