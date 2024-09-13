import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard2 implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isSuccess = localStorage.getItem("isSuccess");

    if (isSuccess === "true") {
    
      this.router.navigate(['/dashboard']); 
      return false;
    } else {
   
      return true;
    }
  }
}

export function loginauthGuard(arg0: RouterStateSnapshot | ActivatedRouteSnapshot): any {
  throw new Error('Function not implemented.');
}
