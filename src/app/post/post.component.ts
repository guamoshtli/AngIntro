import { Component, OnInit, Input } from '@angular/core';

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
  @Input() fromParent?: string;


    constructor() {}
    ngOnInit(): void {

    }

}
