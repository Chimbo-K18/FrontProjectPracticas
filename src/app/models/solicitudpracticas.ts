import { Byte } from "@angular/compiler/src/util";
import { Usuarios } from "./usuarios";
import { Empresa } from "./empresa";
import { ResponsablePpp } from "./ResponsablePPP";
import { tutorempresarial } from "./tutorempresarial";
import { DocumentoSolicitudPracticas } from "./documentoPracticas";

export class SolicitudPracticas {
  idSolicitudPracticas!: number;
  fechaEnvioSolicitud!: string;
  numeroEstudiantes!: number;
  nombreSolicitud!: string;
  fechaAceptacion!: string;
  nombre_carrera!: string;
  estadoSolicitud!: boolean;
  estadoConvocatoria!: boolean;
  estadoActividad!: boolean;
  descripcionActividades!: string;
  documentoSolicitudPracticas!: DocumentoSolicitudPracticas;
  tutorEmpresarial?: tutorempresarial;
  responsablePracticas?: ResponsablePpp;
  empresa?: Empresa;
}

