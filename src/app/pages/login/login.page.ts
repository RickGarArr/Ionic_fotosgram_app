import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UiService } from 'src/app/services/ui.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements AfterViewInit {

  @ViewChild('slidePrincipal') slidePrincipal: IonSlides;

  protected formLogin: FormGroup;
  protected formRegister: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uiService: UiService) {
      this.createLoginForm();
      this.createRegisterForm();
  }
  
  ngAfterViewInit(): void {
    this.slidePrincipal.lockSwipes(true);
  }

  async login() {
    if (this.formLogin.valid) {
      const result = await this.usuarioService.login(this.formLogin.value).catch(err => {
        this.uiService.mostrarError(err.errores[0]);
      });
      if (result) {
        this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true, animationDirection: 'forward' });
      }
    }
  }

  async register() {
    if (this.formRegister.valid) {
      const result = await this.usuarioService.register(this.formRegister.value).catch(err => {
        this.uiService.mostrarError(err.errores[0]);
      });
      if (result) {
        this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true, animationDirection: 'forward' });
      }
    }
  }

  setAvatar(value) {
    this.formRegister.controls['avatar'].setValue(value);
  }

  mostrarLogin() {
    this.slidePrincipal.lockSwipes(false);
    this.slidePrincipal.slideTo(0);
    this.slidePrincipal.lockSwipes(true);
  }
  mostrarRegistro() {
    this.slidePrincipal.lockSwipes(false);
    this.slidePrincipal.slideTo(1);
    this.slidePrincipal.lockSwipes(true);
  }

  createLoginForm() {
    this.formLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  createRegisterForm() {
    this.formRegister = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      nombre: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      avatar: new FormControl('av-1.png')
    });
  }
}
