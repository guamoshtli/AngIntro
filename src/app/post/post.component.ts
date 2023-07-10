import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  title: string = 'List of post';
  messagePost: string = 'Message Post'
  parentPost: string ='Post coming from parent component';
  newParentPost: string = 'This is a new parent post';
  totalParentPosts: number = 20;
  childMessage: string = 'Message from post (child) to app (parent) component';
  outputChildMessage:  string = 'Message from Child Component via Output '
  @Input() fromParent?: string;
  @Output() messageEvent = new EventEmitter<string>();

    constructor() {}
    ngOnInit(): void {

    }

    sendMessage(){
      //console.log('Clicked')
      this.messageEvent.emit(this.outputChildMessage)
    }

}
