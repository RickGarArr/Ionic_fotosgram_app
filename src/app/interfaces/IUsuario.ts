export class Usuario implements IUsuario {
    public id: string;
    public nombre: string;
    public email: string;
    public avatar: string;

    constructor(id: string, nombre: string, email: string, avatar: string) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.avatar = avatar;
    }
}

export interface IUsuario {
    avatar: string;
    email: string;
    nombre: string;
    id: string;
}