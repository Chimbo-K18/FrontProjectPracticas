import { Byte } from "@angular/compiler/src/util";

export class SolicitudPracticas {

    idSolicitudPracticas!: number;
    fechaEnvioSolicitud!: string
    numeroEstudiantes!: number;
    nombreSolicitud!: string;
    fechaAceptacion!: string;
    nombre_carrera !: string;
    estadoSolicitud!: boolean;
    estadoConvocatoria!: boolean;
    estadoActividad!: boolean;
    descripcionActividades!: string;
    documentoSolicitudPracticas: DocumentoSolPracticas | undefined;
    tutorEmpresarial: TutorEmpresarial | undefined;
    responsablePracticas: ResponsablePracticas | undefined;
    empresa: Empresa | undefined;

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
