import { Usuarios } from 'src/app/models/usuarios';
import { Empresa } from "./empresa";

export class tutorempresarial {


    idTutorEmpresarial!: number;
    cargo!: string;
    departamento!: string;
    titulo!: string;
    numeroContacto!: string;
    Empresa?: Empresa;
    usuario?: Usuarios;


}
