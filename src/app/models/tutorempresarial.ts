import { Usuarios } from 'src/app/models/usuarios';
import { Empresa } from "./empresa";
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
    usuario?: Usuarios;
    personasemp?: personasemp;

}
