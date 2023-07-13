import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],

})
export class PostListComponent implements OnInit {

   //messagePost2: string = 'Message Post2'
    @Input() fromPost?: string;
    @Input() fromPost2?: string;
    @Input() totalPosts?: number;

    postList?: Array<any>;

constructor( private postService: PostService) {

this.postList = postService.postList;

}
    ngOnInit(): void {

    }

}
