import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanLoad {
  
  constructor( private usuarioService: UsuarioService, private navCtrl: NavController ) {
  }

  async canLoad(): Promise<boolean> {
    const result = await this.usuarioService.validaToken();
    if (!result) {
      this.navCtrl.navigateRoot('/login');      
    }
    return result;
  }

}
