import { IUsuario } from "./IUsuario";

export interface ResponseLogin {
    token: string;
}

export interface ResultValidaToken {
    ok: boolean;
    usuarioDB: IUsuario;
}