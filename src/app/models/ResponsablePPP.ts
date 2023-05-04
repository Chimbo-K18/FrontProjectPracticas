import { Usuarios } from "./usuarios";

export class ResponsablePpp {
  idResponsablePPP!: number;

  nombreResponsable !: string;

  nombres!: string;

  carrera!: string;

  Usuario!: Usuarios[];
}

interface Usuario{

    idUsuario: number;
	cedula: string;
	nombres: string;
	apellidos: string;
	correo: string;
	carrera: string;
	contrasenia: string;
}
