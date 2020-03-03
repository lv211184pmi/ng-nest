import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'

import { EAppRoutes } from '../enums/app-routes.enum'
import { AuthService } from '../services/auth.service'


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.checkIfLogin()
    if (isLoggedIn) {
      return true
    }

    this.router.navigate([ `/${ EAppRoutes.SignIn }` ], { queryParams: { returnUrl: state.url } })
    return false
  }
}