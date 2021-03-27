import { IUsuario } from "./IUsuario";

export interface IPosts {
    ok: boolean;
    page: number;
    allPost: IPost[];
}

export interface IPost {
    coordenadas: string;
    created: string;
    imagenes: string[];
    mensaje: string;
    usuario: IUsuario;
    id: number;
}