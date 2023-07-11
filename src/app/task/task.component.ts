import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  message: string = '';
  messageStr: string = 'Title ...';
  messageTArea: string = 'Write ...'
  messageArea: string = '';
  urlStr: string = 'Write an imaga url ...'
  imgUrl: string = '';
  bool: boolean = true;
  iwidht: number = 30;
  iheight: number = 25;
  postUrl: string = '';

  onKeyUp() {


    this.message = this.messageStr;

  }

  onKeyUp2() {

    this.messageArea = this.messageTArea;
  }

   onKeyUp3() {

    this.imgUrl = this.urlStr;
  }

  onClick() {

    this.bool = !this.bool;
    this.iheight = this.iheight*2;
    this.iwidht=this.iwidht*2;

  }


}
