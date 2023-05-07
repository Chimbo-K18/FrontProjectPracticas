
import { ResponsablePpp } from './ResponsablePPP';
import { DocumentoSolicitudPracticas } from './documentoPracticas';
import { Empresa } from './empresa';
import { tutorempresarial } from './tutorempresarial';


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
   documentoSolicitudPractica?: DocumentoSolicitudPracticas;
   tutorEmpresarial?: tutorempresarial;
  responsablePPP ?: ResponsablePpp;
}

