import { Byte } from "@angular/compiler/src/util";

export class Convenio{

    idConvenio !: number;
    numero_convenio !: number;
    fecha_elaboracion !: string;
    numero_itv !: string;
    descripcion !: string;
    estado !: boolean;
    documentoConvenio: DocumentoConvenio | undefined; 


}

interface DocumentoConvenio {

    id_documentoSolicitudPracticas: number;
    documento_solicitud_practicas: Byte;

}