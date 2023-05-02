import { Rol } from "./rol";
export class usuario {
    idUsuario!: number;
    cedula!: string;
    correo!: string;
    username!: string;
    contrasenia!: string;
    estado!: string;
    nombres!: string;
    apellidos!: string;
    telefono!: string;
    rol?:Rol;
    idrol!: number;
    idpersonaemp!:number;

    constructor(idrol: number = 5) {
      this.idrol = idrol;
    }
  }
