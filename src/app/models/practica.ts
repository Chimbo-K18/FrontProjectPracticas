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
    estadoanexo1?: boolean;
    estadoanexo2?: boolean;
    estadoanexo3?: boolean;
    estadoanexo4?: boolean;
    estadoanexo5?: boolean;
    estadoanexo6?: boolean;
    estadoanexo7?: boolean;
    estadoanexo8?: boolean;
    solicitudConvocatoria?: SolicitudConvocatoria;
    tutorEmpresarial?: tutorempresarial;
    usuario?: Usuarios;
}
