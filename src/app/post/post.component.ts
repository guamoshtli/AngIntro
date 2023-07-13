import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
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
  posts?: Array<any>;

    constructoOne() {

      let postService = new PostService();
      this.posts = postService.postList;
    }

    constructor(private postService: PostService) {

      this.posts = postService.postList;

    }


    ngOnInit(): void {

    }

    sendMessage(){
      //console.log('Clicked')
      this.messageEvent.emit(this.outputChildMessage)
    }

}
