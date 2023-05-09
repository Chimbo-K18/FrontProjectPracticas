import { ResponsablePpp } from "./ResponsablePPP";
import { Convocatorias } from "./convocatorias";
import { EstudiantePracticante } from "./estudiantepracticante";
import { tutorempresarial } from "./tutorempresarial";
import { Usuarios } from "./usuarios";

export class SolicitudConvocatoria{

    idSolicitudConvocatoria !: number;
    fechaEnvio !: string;
    fechaAprobacion !: string;
    ciclo !: string;
    periodo !: string;
    numero_contacto !: string;
    checkDirector !: boolean;
    checkResponsable !: boolean;
    checkEmpresarial !: boolean;
    estadoSolicitudConvo !: boolean;

    convocatoria!: Convocatorias;
    estudiantePracticante!: EstudiantePracticante;
    tutorEmpresarial!: tutorempresarial;
    responsablePPP!: ResponsablePpp;
    usuario!: Usuarios;

  }