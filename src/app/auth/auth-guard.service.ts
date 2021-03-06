import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private authService:AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            if(this.authService.isAuthenticated() == true) {
                return true;
            } else {
                this.router.navigate(['/signin']);
                return false;
            }
            
    }
}