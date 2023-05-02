import { Empresa } from "./empresa";
import { usuario } from "./usuario";
import { personasemp } from "./personaemp";
export class tutorempresarial {
    idtutorempresarial!: number;
    cargo!: string;
    departamento!: string;
    titulo!: string;
    numerocontacto!: string;
    // idempresa!:number;
    // idusuario!:number;

    // idpersonaemp!:number;
    Empresa?: Empresa;
    usuario?: usuario;
    personasemp?: personasemp;

}
