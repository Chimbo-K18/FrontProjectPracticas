import { SolicitudConvocatoria } from "./solicitudconvocatoria";
import { tutorempresarial } from "./tutorempresarial";
import { Usuarios } from "./usuarios";

export class Practica {
    forEach(arg0: (solicitud: SolicitudConvocatoria) => void) {
      throw new Error('Method not implemented.');
    }

    idPractica?: number;
    fechaInicio?: String;
    fechaFin?: String;
    estadoPractica?: boolean;
    horaInicio?: String;
    horaSalida?: String;
    checkAcademico?: boolean;
    estadoHorario?: boolean;
    checkEmpresarial?: boolean;
    solicitudConvocatoria?: SolicitudConvocatoria;
    tutorEmpresarial?: tutorempresarial;
    usuario?: Usuarios;
}
