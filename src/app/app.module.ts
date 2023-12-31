import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarV2Component } from './navbar-v2/navbar-v2.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { TaskComponent } from './task/task.component';
import { DirectivesComponent } from './directives/directives.component';
import { TaskDirectivesComponent } from './task-directives/task-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { AppendPipe } from './pipes/append.pipe';
import { AppendCliPipe } from './MyPipes/append-cli.pipe';
import { SummaryPipe } from './MyPipes/summary.pipe';
import { PostService } from './Services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarV2Component,
    PostComponent,
    PostListComponent,
    TaskComponent,
    DirectivesComponent,
    TaskDirectivesComponent,
    PipesComponent,
    AppendPipe,
    AppendCliPipe,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
