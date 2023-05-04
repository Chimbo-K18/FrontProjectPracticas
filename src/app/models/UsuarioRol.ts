export class UsuarioRol{
    idUsuario: number=0;
	cedula: string='';
	nombres: string='';
	apellidos: string='';
	correo: string='';
	carrera: string='';
	contrasenia: string='';
	roles: Rol[]=[];


}
class Rol{

	idRol: any;
	rolNombre : any;
}
