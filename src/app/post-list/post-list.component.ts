import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

   //messagePost2: string = 'Message Post2'
    @Input() fromPost?: string;
    @Input() fromPost2?: string;
    @Input() totalPosts?: number;

constructor() {}
    ngOnInit(): void {

    }

}
