import { Byte } from "@angular/compiler/src/util";

export class DetalleConvenio{

    idDetalleConvenio !: number;
    fechaAprobacion !: number;
    fecha_caducidad !: string;
    nombre_carrera !: string;

    convenio: Convenios | undefined; 


    documentoConvenio: DocumentoConvenio | undefined; 

}

interface DocumentoConvenio {

    id_documentoCnv: number;
    documentoConvenio: Byte;

}


interface Convenios {

    idConvenio : number;
    numero_convenio : number;
    fecha_elaboracion : string;
    numero_itv : string;
    descripcion : string;
    estado : boolean;
    documentoConvenio: DocumentoConvenio | undefined; 
}

