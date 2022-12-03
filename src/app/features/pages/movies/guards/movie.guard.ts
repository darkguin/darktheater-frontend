import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, take, throwError } from 'rxjs';
import { MediaService } from '@services/content/media.service';
import { NavigationFullPath, RoutePath } from '@core/values';

@Injectable({
  providedIn: 'root',
})
export class MovieGuard implements CanActivate {
  constructor(private router: Router, private mediaService: MediaService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const mediaId = route.paramMap.get('id') as string;

    return this.mediaService.getMovieById(mediaId).pipe(
      take(1),
      map(() => true),
      catchError((e) => {
        this.router.navigate([NavigationFullPath[RoutePath.HOME]]);
        return throwError(e);
      }),
    );
  }
}
