import { Convenio } from "./convenio";
import { Empresa } from "./empresa";

export class DetalleConvenio {

    idDetalleConvenio?: number;
    fechaAprobacion?: Date;
    fechaCaducidad?: Date;
    nombreCarrera?: string;
    convenio?: Convenio;
    empresa?: Empresa;
}
