import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor( private alertCtrl: AlertController) { }

  mostrarError(...errores: string[]) {
    let list = "";
    errores.forEach(error => {
      list += `<li>${error}</li>`;
    });
    this.alertCtrl.create({
      header: 'Error',
      message: `<ul>${list}</ul>`,
      buttons: ['OK'],
    }).then( alert => {
      alert.present();
    });
  }
}
