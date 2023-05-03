import { Byte } from "@angular/compiler/src/util";

export class SolicitudPracticas {

    idSolicitudPracticas!: number;
    fechaEnvioSolicitud!: Date;
    numeroEstudiantes!: number;
    nombreSolicitud!: string;
    fechaAceptacion!: Date;
    estadoSolicitud!: boolean;
    estadoConvocatoria!: boolean;
    estadoActividad!: boolean;
    descripcionActividades!: string;


}


interface DocumentoSolPracticas {

    id_documentoSolicitudPracticas: number;
    documento_solicitud_practicas: Byte;

}

interface TutorEmpresarial {

    idTutorEmpresarial: number;
    departamento: string;
    titulo: string;
    numeroContacto: string;
    id_usuario: number;
    id_empresa: number;

}

interface ResponsablePracticas {

    idResponsablePPP: number;
    carrera: string;
    titulo: string;
    id_usuario: number;

}

interface Empresa {

    idEmpresa: number;
    rucEmpresa: string;
    nombreEmpresa: string;
    correo: string;
    ciudad: string;
    numeroTelefono: string;
    direccioin: string;
    codigoPostal: string;
    descripcion: string;

}
