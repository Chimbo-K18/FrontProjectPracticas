import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { StorageService } from './services/storage.service';
@Injectable({
    providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {
    constructor(private authService: StorageService, private router: Router) { }
    rolAdmin: any;
    rolCordinador: any;
    rolDirector: any;
    rolResponsablepp: any;
    rolTutorempresarial: any;
    rolTutoracademico: any;
    rolEstudiante: any;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isLoggedIn = this.authService.isLoggedIn();
        const expectedRoles = route.data['expectedRoles'];
        const roles = this.authService.getUser().roles;

        console.log("lllegada" + roles);

        if(roles==null){
            this.router.navigate(['/auth/sign-in']);
        }else{
            
            for (let r of roles) {
                if (r === 'ROLE_ADMIN') {
                    this.rolAdmin = r;
                }
                if(r === 'ROLE_CORDINADOR'){
                    this.rolCordinador = r;
                }
                if(r === 'ROLE_DIRECTOR'){
                    this.rolDirector=r;
                }
                if(r === 'ROLE_RESPONSABLEPP'){
                    this.rolResponsablepp=r;
                }
                if(r === 'ROLE_TUTOREMPRESARIAL'){
                    this.rolTutorempresarial = r;
                }
                if(r === 'ROLE_TUTORACADEMICO'){
                    this.rolTutoracademico=r;
                }
                if(r === 'ROLE_ESTUDIANTE'){
                    this.rolEstudiante=r;
                }
            }
        }
        

        if (isLoggedIn && expectedRoles.includes(this.rolAdmin) || expectedRoles.includes(this.rolCordinador) || expectedRoles.includes(this.rolDirector) || expectedRoles.includes(this.rolResponsablepp) || expectedRoles.includes(this.rolTutorempresarial) || expectedRoles.includes(this.rolTutoracademico) || expectedRoles.includes(this.rolEstudiante)) {
            return true;
        }

        if (isLoggedIn) {
            
        for (let r of roles) {
            if (r === 'ROLE_ADMIN') {
                this.router.navigate(['/administrador/dashboard']);
            }
            if(r === 'ROLE_CORDINADOR'){
                this.router.navigate(['/coordinador/dashboard']);
            }
            if(r === 'ROLE_DIRECTOR'){
                this.router.navigate(['/director/dashboard']);
            }
            if(r === 'ROLE_RESPONSABLEPP'){
                this.router.navigate(['/responsable/dashboard']);
            }
            if(r === 'ROLE_TUTOREMPRESARIAL'){
                this.router.navigate(['/empresarial/dashboard']);
            }
            if(r === 'ROLE_TUTORACADEMICO'){
                this.router.navigate(['/academico/dashboard']);
            }
            if(r === 'ROLE_ESTUDIANTE'){
                this.router.navigate(['/estudiante/dashboard']);
            }
        }

            return true;
        }
        this.router.navigate(['/auth/sign-in']);
        return false;
    }

}