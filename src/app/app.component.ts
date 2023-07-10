import { Component , ViewChild, AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';
//import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage: string ='Message coming from parent component, changed';
  message: string = '';
  fromChildOutput: string = '';
  messageStr: string = 'Messag from TypeScript Component File';
  imgUrl: string = 'https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png';

  //@ViewChild(PostComponent)  childComp?: any;
  @ViewChild(PostComponent) childComponent!: PostComponent;


  constructor() {
    console.log(this.childComponent);
  }

  ngAfterViewInit(): void {
    console.log(this.childComponent);
    this.message = this.childComponent.childMessage;

  }

  reciveMessage($event?: any) {
    //console.log($event)
    this.fromChildOutput = $event;
  }

}
