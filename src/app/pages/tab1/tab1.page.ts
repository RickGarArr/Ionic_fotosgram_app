import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { UiService } from 'src/app/services/ui.service';
import { IPost, IPosts } from '../../interfaces/IPosts';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  protected posts: IPost[] = [];

  constructor( private postService : PostsService, private uiService: UiService) {}

  ngOnInit(): void {
    this.cargar(false);
  }

  recargar(event) {
    this.posts = [];
    this.cargar(true, event);
  }

  siguientes(event) {
    this.cargar(false, event);
  }

  cargar(refresh: boolean, event?) {
    this.postService.getPosts(refresh).subscribe( (result: IPosts) => {
      this.posts = result.allPost;
      if (refresh) {
        event.detail.complete()
      }
    }, () => {});
  }


}
