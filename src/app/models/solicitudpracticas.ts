
import { ResponsablePpp } from './ResponsablePPP';
import { DocumentoSolicitudPracticas } from './docsGlobales/documentoPracticas';
import { Empresa } from './empresa';
import { tutorempresarial } from './tutorempresarial';


export class SolicitudPracticas {
  forEach(arg0: (practica: import("./practica").Practica) => void) {
    throw new Error('Method not implemented.');
  }
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
   documentoSolicitudPractica?: DocumentoSolicitudPracticas;
   tutorEmpresarial?: tutorempresarial;
  responsablePPP ?: ResponsablePpp;
}

