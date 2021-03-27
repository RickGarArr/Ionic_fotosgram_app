import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/IPosts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  
  @Input() protected post: IPost;
  img1 = '/assets/perro-1.jpg';
  
  constructor() { }

  ngOnInit() {
    
  }

}
