import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogin, IRegister } from '../interfaces/ISign';
import { ResponseLogin, ResultValidaToken } from '../interfaces/IResponses';
import { Usuario } from '../interfaces/IUsuario';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private static readonly base_url = environment.base_url;
  public usuario: Usuario;

  constructor(
    private tokenStorageService: TokenStorageService,
    private httpClient: HttpClient ) { }

  public login(loginFormValue: ILogin): Promise<boolean | Array<string>> {
    //retornamos una promesa que resuelve un booleano
    return new Promise<boolean | Array<string>>((resolve, reject) => {
      //hacer la peticion y subscribirnos
      this.httpClient.post(`${UsuarioService.base_url}/usuario/login`, loginFormValue).subscribe(async (resp: ResponseLogin) => {
        // almacenar el token en el localstorage
        await this.tokenStorageService.setToken(resp.token);
        // resolver la promesa (true)
        resolve(true);
      }, (errorResult) => { // cachar algún error en la peticion
        // eliminar el token en caso de que exista
        this.tokenStorageService.removeToken();
        //resolver 
        reject(errorResult.error as Array<string>);
      });
    })
  }

  public register(registerFormValue: IRegister): Promise<boolean | Array<string>> {
    // retornan una promesa que resulve un boleano
    return new Promise<boolean | Array<string>>((resolve, reject) => {
      // hacer la peticion y subscribirnos
      this.httpClient.post(`${UsuarioService.base_url}/usuario/create`, registerFormValue).subscribe(async (resp: ResponseLogin) => {
        // almacenar el token en local storage
        await this.tokenStorageService.setToken(resp.token);
        resolve(true);
      }, errorResult => {
        reject(errorResult.error as Array<string>);
      });
    });
  }

  public validaToken(): Promise<boolean> {
    return new Promise( async (resolve) => {
      // obtener el token del local storage
      const token = await this.tokenStorageService.getToken();
      // declaracion de los headers para hacer la peticion GET
      const headers = {
        'x-token': token
      };
      this.httpClient.get(`${UsuarioService.base_url}/usuario/`, {headers}).subscribe((result: ResultValidaToken) => {
        const { id, nombre, email, avatar } = result.usuarioDB;
        this.usuario = new Usuario(id, nombre, email, avatar);
        resolve(true);
      }, () => {
        resolve(false);
      });
    });
  }
}
