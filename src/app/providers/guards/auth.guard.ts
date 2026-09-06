import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, GuardResult, MaybeAsync, UrlTree } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {

    const isBrowser = isPlatformBrowser(this.platformId);

    if (!isBrowser) {
      return this.router.createUrlTree(
        ['/auth'],
        { queryParams: { returnUrl: state.url } }
      );
    }

    const currentUser = localStorage.getItem('currentUser');
    const userId = Number(currentUser);

    const loggedIn =
      currentUser !== null &&
      Number.isInteger(userId) &&
      userId > 0;

    return loggedIn
      ? true
      : this.router.createUrlTree(
        ['/auth'],
        { queryParams: { returnUrl: state.url } }
      );
  }
}