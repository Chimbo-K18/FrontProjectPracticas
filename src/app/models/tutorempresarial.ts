import { Usuarios } from 'src/app/models/usuarios';
import { Empresa } from "./empresa";

export class tutorempresarial {
  idtutorempresarial!: number;
  cargo!: string;
  departamento!: string;
  titulo!: string;
  numerocontacto!: string;
  Empresa?: Empresa;
  usuario?: Usuarios;
}
