import { personasemp } from 'src/app/models/personaemp';

export class Usuarios {
    idUsuario: number=0;
	cedula: string='';
	nombres: string='';
	apellidos: string='';
	correo: string='';
	carrera: string='';
	contrasenia: string='';
  	idpersonaemp?:personasemp;
}
