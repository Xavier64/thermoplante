import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean { //J'utilise un boolean

      if (!this.auth.isLoggedIn()) { // Si l'user n'est pas correctement identifé je renvoie sur la page login
        this.router.navigateByUrl('/login');
      }
      //Sinon j'utilise isLoggedIn de auth.service pour le connecter - récup du token
      return this.auth.isLoggedIn();
  }
  
}
