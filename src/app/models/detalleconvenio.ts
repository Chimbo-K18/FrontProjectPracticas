import { Convenio } from "./convenio";
import { Empresa } from "./empresa";

export class DetalleConvenio {

    idDetalleConvenio?: number;
    fechaAprobacion?: String;
    fecha_caducidad?: String;
    nombre_carrera?: string;
    convenio?: Convenio;
    empresa?: Empresa;
}
