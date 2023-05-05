
import { ResponsablePpp } from './ResponsablePPP';


export class SolicitudPracticas {
  idSolicitudPracticas !: number;
  fechaEnvioSolicitud !: string;
  numeroEstudiantes!: number;
  nombreSolicitud!: string;
  fechaAceptacion!: string;
  nombre_carrera!: string;
  estadoSolicitud!: boolean;
  estadoConvocatoria!: boolean;
  estadoActividad!: boolean;
  descripcionActividades!: string;
  // documentoSolicitudPractica?: DocumentoSolicitudPracticas;
  // tutorEmpresarial: tutorempresarial;
  responsablePPP ?: ResponsablePpp;
  // empresa: Empresa;
}



export interface Usuarios {
  idUsuario: number;
  cedula: string;
  nombres: string;
  apellidos: string;

  correo: string;
  carrera: string;
  contrasenia: string;

  roles: Rol;
}

export interface Rol {

  idRol: number;
  rolNombre: string;
}
