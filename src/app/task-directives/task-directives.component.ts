import { Component } from '@angular/core';

@Component({
  selector: 'app-task-directives',
  templateUrl: './task-directives.component.html',
  styleUrls: ['./task-directives.component.css']
})
export class TaskDirectivesComponent {

  name?: string;
  email?: string;
  address?: string;
  userArray: Array<any> = [];

  constructor() {

  }
  onClick() {
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    })

    console.log(this.userArray);
  }

  onDelete(index: number) {

    this.userArray.splice(index, 1);

  }
}
