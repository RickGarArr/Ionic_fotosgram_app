import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/IPosts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  @Input() protected posts: IPost[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.posts);
  }

}
