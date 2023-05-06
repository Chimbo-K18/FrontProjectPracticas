import { Convenio } from "./convenio";
import { Empresa } from "./empresa";

export class DetalleConvenio {

    idDetalleConvenio?: number;
    fechaAprobacion?: Date;
    fecha_caducidad?: Date;
    nombre_carrera?: string;
    convenio?: Convenio;
    empresa?: Empresa;
}
