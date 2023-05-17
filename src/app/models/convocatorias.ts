import { DocumentoConvocatoria } from "./docsGlobales/documentoConvocatoria";
import { SolicitudPracticas } from "./solicitudpracticas";

export class Convocatorias{

  idConvocatorias !: number;
  nombreConvocatoria !: string;
  fechaPublicacion !: string;
  fechaExpiracion !: string;
  estadoConvocatoria !: boolean;
  solicitudPracticas ?: SolicitudPracticas;
  documentoConvatoria ?: DocumentoConvocatoria;
}
