import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private static base_url = environment.base_url;
  private static paginaPost: number = 0;
  private token: string;
  constructor( private http: HttpClient, private tokenStorageService: TokenStorageService ) {
    this.getToken();
  }

  private async getToken() {
    this.token = await this.tokenStorageService.getToken();
  }

  public getPosts(refresh: boolean) {
    if (refresh) {
      PostsService.paginaPost = 0;
    }
    return this.http.get(`${PostsService.base_url}/posteo/all?page=${++PostsService.paginaPost}`, {headers: { 'x-token': this.token }});
  }
}
