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
  postObj: object = {
    id: 1,
    postTitle: "Post Title 1"
  }

  postArray: Array<string> = [
    "post 1",
    "post 2",
    "post 3",
    "post 4",
    "post 5",
    "post 6"
  ]

  userDetails = {
    name: 'User 1',
    city: 'New York',
    countryCode: 'US'
  }

  dummyText: string = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


}
